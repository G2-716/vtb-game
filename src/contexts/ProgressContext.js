import {createContext, useContext, useEffect, useState} from 'react'
import {NEXT_SCREENS, SCREENS} from "../constants/screens";
import {getUrlParam} from "../utils/getUrlParam";
import {getLeaderboard} from "../api/getLeaderboard";
import {saveToLeaderboard} from "../api/saveToLeaderboard";

const INITIAL_STATE = {
    screen: SCREENS.INTRO_1,
    user: null,
    leaderboard: null,
    isLeaderboardLoading: false,
    isLeaderboardSaving: false,
    isFirstElevator: true,
    testPoints: 0,
    points2048: 0,
    wordPoints: 0,
    linesPoints: 0,
    tetrisPoints: 0,
    moveFigurePoints: 0,
    visitedFloors: [],
    floorAnswers: {},
    itemsPoints: 0,
    items: [],
}

const ProgressContext = createContext(INITIAL_STATE)

export function ProgressProvider(props) {
    const {children} = props
    const [screen, setScreen] = useState(getUrlParam('screen') || INITIAL_STATE.screen)
    const [user, setUser] = useState(INITIAL_STATE.user)
    const [leaderboard, setLeaderboard] = useState(INITIAL_STATE.leaderboard)
    const [isLeaderboardLoading, setIsLeaderboardLoading] = useState(INITIAL_STATE.isLeaderboardLoading)
    const [isLeaderboardSaving, setIsLeaderboardSaving] = useState(INITIAL_STATE.isLeaderboardSaving)
    const [isFirstElevator, setIsFirstElevator] = useState(INITIAL_STATE.isFirstElevator)
    const [testPoints, setTestPoints] = useState(INITIAL_STATE.testPoints)
    const [points2048, setPoints2048] = useState(INITIAL_STATE.points2048)
    const [wordPoints, setWordPoints] = useState(INITIAL_STATE.wordPoints)
    const [linesPoints, setLinesPoints] = useState(INITIAL_STATE.linesPoints)
    const [tetrisPoints, setTetrisPoints] = useState(INITIAL_STATE.tetrisPoints)
    const [itemsPoints, setItemsPoints] = useState(INITIAL_STATE.itemsPoints)
    const [moveFigurePoints, setMoveFigurePoints] = useState(INITIAL_STATE.moveFigurePoints)
    const [visitedFloors, setVisitedFloors] = useState(INITIAL_STATE.visitedFloors)
    const [floorAnswers, setFloorAnswers] = useState(INITIAL_STATE.floorAnswers)
    const [items, setItems] = useState(INITIAL_STATE.items)
    const totalPoints = testPoints + points2048 + wordPoints + linesPoints + tetrisPoints + moveFigurePoints + itemsPoints

    function loadLeaderboard() {
        setIsLeaderboardLoading(true)

        getLeaderboard()
            .then(setLeaderboard)
            .finally(() => setIsLeaderboardLoading(false))
    }

    function saveLeaderboard() {
        if (user) {
            setIsLeaderboardSaving(true)

            saveToLeaderboard(user, totalPoints)
                .finally(() => setIsLeaderboardSaving(false))
        }
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
        setIsLeaderboardLoading(INITIAL_STATE.isLeaderboardLoading)
        setIsLeaderboardSaving(INITIAL_STATE.isLeaderboardSaving)
        loadLeaderboard()
    }

    function addFloorAnswer(floorId, answerId) {
        setFloorAnswers(prev => {
            if (!prev[floorId]) return {...prev, [floorId]: [answerId]};

            return  {
                ...prev, 
                [floorId]: prev[floorId].includes(answerId) ? prev[floorId] : [...prev[floorId], answerId]
            };
        })
    }

    function addItemPoints(floor) {
        if (items.includes(floor)) return;

        setItemsPoints(prev => prev + 1);
        setItems(prev => [...prev, floor]);
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
        isLeaderboardLoading,
        isLeaderboardSaving,
        visitedFloors,
        floorAnswers,
        next,
        reset,
        visitElevator: () => setIsFirstElevator(false),
        addTestPoints: () => setTestPoints(prev => prev + 2),
        addPoints2048: setPoints2048,
        addWordPoints: setWordPoints,
        addLinesPoints: setLinesPoints,
        addTetrisPoints: setTetrisPoints,
        addMoveFigurePoints: setMoveFigurePoints,
        setUser: (id, name, email) => setUser({id, name, email}),
        loadLeaderboard,
        saveLeaderboard,
        addVisitedFloor: (id) => setVisitedFloors(prev => prev.includes(id) ? prev : [...prev, id]),
        addFloorAnswer,
        addItemPoints,
    }

    useEffect(() => {
        loadLeaderboard()
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
