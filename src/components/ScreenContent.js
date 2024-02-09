import {useMemo} from "react";
import {SwitchTransition, CSSTransition} from "react-transition-group";
import styled from '@emotion/styled'
import {useProgress} from "../contexts/ProgressContext";
import {SCREENS} from "../constants/screens";
import {Intro1} from "./screens/Intro1";
import {Intro2} from "./screens/Intro2";
import {Intro3} from './screens/Intro3'
import {Intro4} from './screens/Intro4'
import {Lift1} from './screens/Lift1'
import {Lift2} from './screens/Lift2'
import {Lift3} from './screens/Lift3'
import {Game11} from './screens/Game11'
import {Game12} from './screens/Game12'
import {Game13} from './screens/Game13'
import {Game14} from './screens/Game14'
import {Game15} from './screens/Game15'
import {Game16} from './screens/Game16'
import {Game17} from './screens/Game17'
import {Game18} from './screens/Game18'
import {Game19} from './screens/Game19'
import {Game110} from './screens/Game110'
import {Game21} from './screens/Game21'
import {Game22} from './screens/Game22'
import {Game23} from './screens/Game23'
import {Game24} from './screens/Game24'
import {Game25} from './screens/Game25'
import {Game26} from './screens/Game26'
import {Game27} from './screens/Game27'
import {Game28} from './screens/Game28'
import {Game29} from './screens/Game29'
import {Game31} from './screens/Game31'
import {Game32} from './screens/Game32'
import {Game33} from './screens/Game33'
import {Game34} from './screens/Game34'
import {Game35} from './screens/Game35'
import {Game36} from './screens/Game36'
import {Game37} from './screens/Game37'
import {Game38} from './screens/Game38'
import {Game39} from './screens/Game39'
import {Game310} from './screens/Game310'
import {Game41} from './screens/Game41'
import {Game42} from './screens/Game42'
import {Game43} from './screens/Game43'
import {Game44} from './screens/Game44'
import {Game45} from './screens/Game45'
import {Game46} from './screens/Game46'
import {Game47} from './screens/Game47'
import {Game48} from './screens/Game48'
import {Game49} from './screens/Game49'
import {Game410} from './screens/Game410'
import {Game51} from './screens/Game51'
import {Game52} from './screens/Game52'
import {Game53} from './screens/Game53'
import {Game54} from './screens/Game54'
import {Game55} from './screens/Game55'
import {Game56} from './screens/Game56'
import {Game57} from './screens/Game57'
import {Game58} from './screens/Game58'
import {Game59} from './screens/Game59'
import {Internship1} from './screens/Internship1'
import {Internship2} from './screens/Internship2'
import {Internship3} from './screens/Internship3'
import {Test1} from './screens/Test1'
import {Test2} from './screens/Test2'
import {Test3} from './screens/Test3'
import {Test4} from './screens/Test4'
import {Test5} from './screens/Test5'
import {Test6} from './screens/Test6'
import {Test7} from './screens/Test7'
import {Test8} from './screens/Test8'
import {Test9} from './screens/Test9'
import {Test10} from './screens/Test10'
import {Test11} from './screens/Test11'
import {Test12} from './screens/Test12'
import {Final1} from './screens/Final1'
import {Final2} from './screens/Final2'
import {Final3} from './screens/Final3'

const SCREEN_COMPONENTS = {
    [SCREENS.INTRO_1]: Intro1,
    [SCREENS.INTRO_2]: Intro2,
    [SCREENS.INTRO_3]: Intro3,
    [SCREENS.INTRO_4]: Intro4,
    [SCREENS.LIFT_1]: Lift1,
    [SCREENS.LIFT_2]: Lift2,
    [SCREENS.LIFT_3]: Lift3,
    [SCREENS.GAME_1_1]: Game11,
    [SCREENS.GAME_1_2]: Game12,
    [SCREENS.GAME_1_3]: Game13,
    [SCREENS.GAME_1_4]: Game14,
    [SCREENS.GAME_1_5]: Game15,
    [SCREENS.GAME_1_6]: Game16,
    [SCREENS.GAME_1_7]: Game17,
    [SCREENS.GAME_1_8]: Game18,
    [SCREENS.GAME_1_9]: Game19,
    [SCREENS.GAME_1_10]: Game110,
    [SCREENS.GAME_2_1]: Game21,
    [SCREENS.GAME_2_2]: Game22,
    [SCREENS.GAME_2_3]: Game23,
    [SCREENS.GAME_2_4]: Game24,
    [SCREENS.GAME_2_5]: Game25,
    [SCREENS.GAME_2_6]: Game26,
    [SCREENS.GAME_2_7]: Game27,
    [SCREENS.GAME_2_8]: Game28,
    [SCREENS.GAME_2_9]: Game29,
    [SCREENS.GAME_3_1]: Game31,
    [SCREENS.GAME_3_2]: Game32,
    [SCREENS.GAME_3_3]: Game33,
    [SCREENS.GAME_3_4]: Game34,
    [SCREENS.GAME_3_5]: Game35,
    [SCREENS.GAME_3_6]: Game36,
    [SCREENS.GAME_3_7]: Game37,
    [SCREENS.GAME_3_8]: Game38,
    [SCREENS.GAME_3_9]: Game39,
    [SCREENS.GAME_3_10]: Game310,
    [SCREENS.GAME_4_1]: Game41,
    [SCREENS.GAME_4_2]: Game42,
    [SCREENS.GAME_4_3]: Game43,
    [SCREENS.GAME_4_4]: Game44,
    [SCREENS.GAME_4_5]: Game45,
    [SCREENS.GAME_4_6]: Game46,
    [SCREENS.GAME_4_7]: Game47,
    [SCREENS.GAME_4_8]: Game48,
    [SCREENS.GAME_4_9]: Game49,
    [SCREENS.GAME_4_10]: Game410,
    [SCREENS.GAME_5_1]: Game51,
    [SCREENS.GAME_5_2]: Game52,
    [SCREENS.GAME_5_3]: Game53,
    [SCREENS.GAME_5_4]: Game54,
    [SCREENS.GAME_5_5]: Game55,
    [SCREENS.GAME_5_6]: Game56,
    [SCREENS.GAME_5_7]: Game57,
    [SCREENS.GAME_5_8]: Game58,
    [SCREENS.GAME_5_9]: Game59,
    [SCREENS.INTERNSHIP_1]: Internship1,
    [SCREENS.INTERNSHIP_2]: Internship2,
    [SCREENS.INTERNSHIP_3]: Internship3,
    [SCREENS.TEST_1]: Test1,
    [SCREENS.TEST_2]: Test2,
    [SCREENS.TEST_3]: Test3,
    [SCREENS.TEST_4]: Test4,
    [SCREENS.TEST_5]: Test5,
    [SCREENS.TEST_6]: Test6,
    [SCREENS.TEST_7]: Test7,
    [SCREENS.TEST_8]: Test8,
    [SCREENS.TEST_9]: Test9,
    [SCREENS.TEST_10]: Test10,
    [SCREENS.TEST_11]: Test11,
    [SCREENS.TEST_12]: Test12,
    [SCREENS.FINAL_1]: Final1,
    [SCREENS.FINAL_2]: Final2,
    [SCREENS.FINAL_3]: Final3,
}

const SWITCH_DURATION = 400;

const SWITCH_NAME = 'switch';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    &.${SWITCH_NAME}-enter {
        opacity: 0;
    }

    &.${SWITCH_NAME}-enter-active {
        opacity: 1;
        transition: opacity ${SWITCH_DURATION}ms;
    }

    &.${SWITCH_NAME}-exit {
        opacity: 1;
    }

    &.${SWITCH_NAME}-exit-active {
        opacity: 0;
        transition: opacity ${SWITCH_DURATION}ms;
    }
`

export function ScreenContent() {
    const {screen} = useProgress()
    const Screen = useMemo(() => SCREEN_COMPONENTS[screen], [screen])

    return Screen && (
        <SwitchTransition mode='out-in'>
            <CSSTransition key={screen} timeout={SWITCH_DURATION} classNames={SWITCH_NAME}>
                <Wrapper>
                    <Screen />
                </Wrapper>
            </CSSTransition>
        </SwitchTransition>
    )
}