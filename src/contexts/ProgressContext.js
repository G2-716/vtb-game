import {createContext, useContext, useState} from 'react'
import {NEXT_SCREENS, SCREENS} from "../constants/screens";
import {getUrlParam} from "../utils/getUrlParam";

const INITIAL_STATE = {
    screen: SCREENS.INTRO_1,
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
    const [testPoints, setTestPoints] = useState(INITIAL_STATE.testPoints)
    const [points2048, setPoints2048] = useState(INITIAL_STATE.points2048)
    const [wordPoints, setWordPoints] = useState(INITIAL_STATE.wordPoints)
    const [linesPoints, setLinesPoints] = useState(INITIAL_STATE.linesPoints)
    const [tetrisPoints, setTetrisPoints] = useState(INITIAL_STATE.tetrisPoints)
    const [moveFigurePoints, setMoveFigurePoints] = useState(INITIAL_STATE.moveFigurePoints)
    const totalPoints = testPoints + points2048 + wordPoints + linesPoints + tetrisPoints + moveFigurePoints

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
    }

    function addTestPoints() {
        setTestPoints(prev => prev + 1);
    }

    function addPoints2048(amount) {
        setPoints2048(amount)
    }

    function addWordPoints(amount) {
        setWordPoints(amount)
    }

    function addLinesPoints(amount) {
        setLinesPoints(amount)
    }

    function addTetrisPoints(amount) {
        setTetrisPoints(amount)
    }

    function addMoveFigurePoints(amount) {
        setMoveFigurePoints(amount)
    }

    const state = {
        screen,
        testPoints,
        points2048,
        wordPoints,
        linesPoints,
        tetrisPoints,
        moveFigurePoints,
        totalPoints,
        next,
        reset,
        addTestPoints,
        addPoints2048,
        addWordPoints,
        addLinesPoints,
        addTetrisPoints,
        addMoveFigurePoints,
    }

    return (
        <ProgressContext.Provider value={state}>
            {children}
        </ProgressContext.Provider>
    )
}

export function useProgress() {
    return useContext(ProgressContext)
}
