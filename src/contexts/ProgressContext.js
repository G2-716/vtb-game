import {createContext, useContext, useState} from 'react'
import {NEXT_SCREENS, SCREENS} from "../constants/screens";
import {getUrlParam} from "../utils/getUrlParam";
import {usePrevious} from "../hooks/usePrevious";

const INITIAL_STATE = {
    screen: SCREENS.INTRO_1,
}

const ProgressContext = createContext(INITIAL_STATE)

export function ProgressProvider(props) {
    const {children} = props
    const [screen, setScreen] = useState(getUrlParam('screen') || INITIAL_STATE.screen)
    const previousScreen = usePrevious(screen)

    function next(customScreen) {
        const nextScreen = customScreen ?? NEXT_SCREENS[screen]

        if (!nextScreen) {
            return
        }

        setScreen(nextScreen)
    }

    function back() {
        setScreen(previousScreen)
    }

    function reset() {
        setScreen(getUrlParam('screen') || INITIAL_STATE.screen)
    }

    const state = {
        screen,
        previousScreen,
        next,
        back,
        reset,
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
