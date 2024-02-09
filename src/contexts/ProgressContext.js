import {createContext, useCallback, useContext, useMemo, useState} from 'react'
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

    const next = useCallback((customScreen) => {
        const nextScreen = customScreen ?? NEXT_SCREENS[screen]

        if (!nextScreen) {
            return
        }

        setScreen(nextScreen)
    }, [screen])

    const back = useCallback(() => {
        setScreen(previousScreen)
    }, [previousScreen])

    const reset = useCallback(() => {
        setScreen(getUrlParam('screen') || INITIAL_STATE.screen)
    }, [])

    const state = useMemo(
        () => ({
            screen,
            previousScreen,
            next,
            back,
            reset,
        }),
        [
            screen,
            previousScreen,
            next,
            back,
            reset,
        ],
    )

    return (
        <ProgressContext.Provider value={state}>
            {children}
        </ProgressContext.Provider>
    )
}

export function useProgress() {
    return useContext(ProgressContext)
}
