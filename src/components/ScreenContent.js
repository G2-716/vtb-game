import {useMemo} from "react";
import {SwitchTransition, CSSTransition} from "react-transition-group";
import styled from '@emotion/styled'
import {useProgress} from "../contexts/ProgressContext";
import {SCREENS} from "../constants/screens";
import {Intro1} from "./screens/Intro1";
import {Intro2} from "./screens/Intro2";
import {Intro3} from './screens/Intro3';
import {Intro4} from './screens/Intro4';
import {Lift1} from './screens/Lift1';
import {Lift2} from './screens/Lift2';
import {Lift3} from './screens/Lift3';
import {Game11, Game110, Game12, Game13, Game14, Game15, Game16, Game17, Game18, Game19} from './screens/floor3';
import {Game21, Game22, Game23, Game24, Game25, Game26, Game27, Game28, Game29} from './screens/floor2';
import {Game31, Game310, Game32, Game33, Game34, Game35, Game36, Game37, Game38, Game39} from './screens/floor1';
import {Game41, Game410, Game42, Game43, Game44, Game45, Game46, Game47, Game48, Game49} from './screens/floor5';
import {Game51, Game52, Game53, Game54, Game55, Game56, Game57, Game58, Game59} from './screens/floor4';
import { 
    Internship1, Internship2, Internship3, Test1, Test10, Test11, 
    Test12, Test2, Test3, Test4, Test5, Test6, Test7, Test8, Test9 
} from './screens/floor6';

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