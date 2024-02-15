import {useEffect, useRef, useState} from "react";
import cloneDeep from "lodash/cloneDeep";
import {INITIAL_POINTS, TILE_COUNT_PER_DIMENSION, POINTS} from "./constants";

function createBoard() {
    const board = [];

    for (let i = 0; i < TILE_COUNT_PER_DIMENSION; i += 1) {
        board[i] = [];

        for (let j = 0; j < TILE_COUNT_PER_DIMENSION; j += 1) {
            board[i][j] = INITIAL_POINTS[i][j] ? INITIAL_POINTS[i][j].id : null;
        }
    }

    return board;
}

function createPaths() {
    return Object.keys(POINTS).reduce((acc, id) => ({...acc, [id]: null}), {})
}

export function useGame(onWin) {
    const [board, setBoard] = useState(createBoard);
    const [paths, setPaths] = useState(createPaths);
    const [connected, setConnected] = useState(0);
    const currentIdRef = useRef(null);
    const attempts = connected >= Object.keys(POINTS).length ? connected - Object.keys(POINTS).length + 1 : 0

    function handleDragStart(position) {
        const [x, y] = position
        const point = board[y][x]

        if (point) {
            const clonedPaths = cloneDeep(paths)
            clonedPaths[point] = [position]
            setPaths(clonedPaths)
            currentIdRef.current = point
        } else {
            const last = Object.keys(paths).find((id) => paths[id] && paths[id][paths[id].length - 1][0] == x && paths[id][paths[id].length - 1][1] == y)

            if (last) {
                currentIdRef.current = +last
            }
        }
    }

    function handleDragMove(fromPosition, toPosition) {
        const [fromX, fromY] = fromPosition
        const fromPoint = board[fromY][fromX]
        const [toX, toY] = toPosition
        const toPoint = board[toY][toX]

        if (!currentIdRef.current) {
            return
        }

        const last = paths[currentIdRef.current][paths[currentIdRef.current].length - 1]

        if (Math.abs(toX - last[0]) + Math.abs(toY - last[1]) > 1) {
            return
        }

        if (toPoint && toPoint !== currentIdRef.current) {
            return
        }

        const toId = Object.keys(paths).find(id => paths[id] && paths[id].find(([x, y]) => x == toX && y == toY))

        if (toId && toId != currentIdRef.current) {
            return
        }

        const currentPathIndex = paths[currentIdRef.current].findIndex(([x, y]) => x == toX && y == toY)

        if (currentPathIndex > -1) {
            const clonedPaths = cloneDeep(paths)
            clonedPaths[currentIdRef.current] = clonedPaths[currentIdRef.current].slice(0, currentPathIndex + 1)
            setPaths(clonedPaths)
            return
        }

        const clonedPaths = cloneDeep(paths)
        clonedPaths[currentIdRef.current].push([toX, toY])
        setPaths(clonedPaths)
    }

    function handleDragEnd(position) {
        const [x, y] = position
        const point = board[y][x]

        if (!currentIdRef.current) {
            return
        }

        if (paths[currentIdRef.current].length === 1) {
            const clonedPaths = cloneDeep(paths)
            clonedPaths[currentIdRef.current] = null
            setPaths(clonedPaths)
        } else if (point && point === currentIdRef.current) {
            setConnected(prev => prev + 1)
        }

        currentIdRef.current = null
    }

    const isWin = Object.keys(paths).every((id) => {
        const path = paths[id]

        if (!path) {
            return false
        }

        const first = path[0]
        const last = path[path.length - 1]

        return path.length > 1 && board[first[1]][first[0]] && board[last[1]][last[0]]
    })
    const shouldCallWin = isWin && !currentIdRef.current

    useEffect(() => {
        if (shouldCallWin) {
            onWin?.()
        }
    }, [shouldCallWin]);

    return {
        board,
        paths,
        attempts,
        onDragStart: handleDragStart,
        onDragMove: handleDragMove,
        onDragEnd: handleDragEnd,
    }
}
