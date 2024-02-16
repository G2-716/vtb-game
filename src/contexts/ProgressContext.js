import {createContext, useContext, useEffect, useState} from 'react'
import {NEXT_SCREENS, SCREENS} from "../constants/screens";
import {getUrlParam} from "../utils/getUrlParam";
import {getLeaderboard} from "../api/getLeaderboard";

const INITIAL_STATE = {
    screen: SCREENS.INTRO_1,
    user: null,
    leaderboard: null,
    isFirstElevator: true,
    testPoints: 0,
    points2048: 0,
    wordPoints: 0,
    linesPoints: 0,
    tetrisPoints: 0,
    moveFigurePoints: 0,
}

const ProgressContext = createContext(INITIAL_STATE)

export function ProgressProvider(props) {
    const {children} = props
    const [screen, setScreen] = useState(getUrlParam('screen') || INITIAL_STATE.screen)
    const [user, setUser] = useState(INITIAL_STATE.user)
    const [leaderboard, setLeaderboard] = useState(INITIAL_STATE.leaderboard)
    const [isFirstElevator, setIsFirstElevator] = useState(INITIAL_STATE.isFirstElevator);
    const [testPoints, setTestPoints] = useState(INITIAL_STATE.testPoints)
    const [points2048, setPoints2048] = useState(INITIAL_STATE.points2048)
    const [wordPoints, setWordPoints] = useState(INITIAL_STATE.wordPoints)
    const [linesPoints, setLinesPoints] = useState(INITIAL_STATE.linesPoints)
    const [tetrisPoints, setTetrisPoints] = useState(INITIAL_STATE.tetrisPoints)
    const [moveFigurePoints, setMoveFigurePoints] = useState(INITIAL_STATE.moveFigurePoints)
    const totalPoints = testPoints + points2048 + wordPoints + linesPoints + tetrisPoints + moveFigurePoints

    function init() {
        getLeaderboard().then(setLeaderboard)
    }

    function next(customScreen) {
        const nextScreen = customScreen ?? NEXT_SCREENS[screen]

        if (!nextScreen) {
            return
        }

        setScreen(nextScreen)
    }

    function reset() {
        setScreen(getUrlParam('screen') || INITIAL_STATE.screen)
        setPoints2048(INITIAL_STATE.points2048)
        setWordPoints(INITIAL_STATE.wordPoints)
        setLinesPoints(INITIAL_STATE.linesPoints)
        setTetrisPoints(INITIAL_STATE.tetrisPoints)
        setMoveFigurePoints(INITIAL_STATE.moveFigurePoints)
        setUser(INITIAL_STATE.user)
        setIsFirstElevator(INITIAL_STATE.isFirstElevator)
        getLeaderboard().then(setLeaderboard)
    }

    const state = {
        screen,
        user,
        leaderboard,
        testPoints,
        points2048,
        wordPoints,
        linesPoints,
        tetrisPoints,
        moveFigurePoints,
        totalPoints,
        isFirstElevator,
        next,
        reset,
        visitElevator: () => setIsFirstElevator(false),
        addTestPoints: () => setTestPoints(prev => prev + 1),
        addPoints2048: setPoints2048,
        addWordPoints: setWordPoints,
        addLinesPoints: setLinesPoints,
        addTetrisPoints: setTetrisPoints,
        addMoveFigurePoints: setMoveFigurePoints,
        setUser: (id, name, email) => setUser({id, name, email}),
    }

    useEffect(() => {
        init()
    }, []);

    return (
        <ProgressContext.Provider value={state}>
            {children}
        </ProgressContext.Provider>
    )
}

export function useProgress() {
    return useContext(ProgressContext)
}
