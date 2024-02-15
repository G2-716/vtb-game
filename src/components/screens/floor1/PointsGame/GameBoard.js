import styled from "@emotion/styled";
import {GameBoardCell} from "./GameBoardCell";
import {CONTAINER_SIZE, TILE_COUNT_PER_DIMENSION, POINTS} from "./constants";
import {useSizeRatio} from "../../../../contexts/SizeRatioContext";
import {createRoundedPolyline} from "../../../../utils/createRoundedPolyline";

const Board = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: ${({sizeRatio}) => `calc(${CONTAINER_SIZE}px * ${sizeRatio})`};
    height: ${({sizeRatio}) => `calc(${CONTAINER_SIZE}px * ${sizeRatio})`};
`

const Line = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    fill: none;
    pointer-events: none;
`

export function GameBoard({ className, board, paths }) {
    const sizeRatio = useSizeRatio()

    return (
        <Board className={className} sizeRatio={sizeRatio}>
            {board.map((row, y) => (
                row.map((point, x) => {
                    const last = Object.keys(paths).find((id) => paths[id] && paths[id][paths[id].length - 1][0] == x && paths[id][paths[id].length - 1][1] == y)
                    return(
                        <GameBoardCell
                            key={`${x}-${y}`}
                            position={[x, y]}
                            point={point}
                            current={point ? paths[last]?.length === 1 : last}
                            active={Object.keys(paths).some((id) => paths[id] && paths[id].find(([_x, _y]) => _x == x && _y == y))}
                            color={POINTS[Object.keys(paths).find((id) => paths[id] && paths[id].find(([_x, _y]) => _x == x && _y == y))]?.color}
                        />
                    )
                })
            ))}
            {Object.keys(paths).map((id) => paths[id] && (
                <Line key={id} xmlns="http://www.w3.org/2000/svg">
                    <path stroke={POINTS[id].color} strokeWidth={15 * sizeRatio} d={createRoundedPolyline(paths[id].map(([x, y]) => {
                        const size = (CONTAINER_SIZE / TILE_COUNT_PER_DIMENSION) * sizeRatio
                        return [x * size + (size / 2), y * size + (size / 2)]
                    }), 10 * sizeRatio)} />
                </Line>
            ))}
        </Board>
    );
}