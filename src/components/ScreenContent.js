import {useMemo} from "react";
import {SwitchTransition, CSSTransition} from "react-transition-group";
import styled from '@emotion/styled'
import {useProgress} from "../contexts/ProgressContext";
import {SCREENS} from "../constants/screens";
import {useImagePreloader} from "../hooks/useImagePreloader";
import {Intro1} from "./screens/Intro1";
import {Intro2} from "./screens/Intro2";
import {Intro3} from './screens/Intro3';
import {Intro4} from './screens/Intro4';
import {Lift1} from './screens/Lift1';
import {Lift2} from './screens/Lift2';
import {Lift3} from './screens/Lift3';
import {Game11, Game19, Game12, Game13, Game14, Game15, Game16, Game17, Game18, Game110} from './screens/floor3';
import {Game21, Game22, Game23, Game24, Game25, Game26, Game27, Game28, Game29} from './screens/floor2';
import {Game31, Game310, Game32, Game33, Game34, Game35, Game36, Game37, Game38, Game39} from './screens/floor1';
import {Game41, Game42, Game43, Game44, Game45, Game46, Game47, Game48, Game49, Game410} from './screens/floor5';
import {Game51, Game52, Game53, Game54, Game55, Game56, Game57, Game58, Game59} from './screens/floor4';
import {
    Internship1, Internship2, Internship3, Test1, Test10, Test11,
    Test12, Test2, Test3, Test4, Test5, Test6, Test7, Test8, Test9
} from './screens/floor6';

import {Final1} from './screens/final/Final1'
import {Final2} from './screens/final/Final2'
import {Final3} from './screens/final/Final3'
import {Final4} from './screens/final/Final4'

import answer1_projects from '../assets/images/answer1_projects.png'
import answer1_skills from '../assets/images/answer1_skills.png'
import answer1_values from '../assets/images/answer1_values.png'
import answer1_work from '../assets/images/answer1_work.png'
import answer2_projects from '../assets/images/answer2_projects.png'
import answer2_skills from '../assets/images/answer2_skills.png'
import answer2_values from '../assets/images/answer2_values.png'
import answer2_work from '../assets/images/answer2_work.png'
import answer3_projects from '../assets/images/answer3_projects.png'
import answer3_skills from '../assets/images/answer3_skills.png'
import answer3_values from '../assets/images/answer3_values.png'
import answer3_work from '../assets/images/answer3_work.png'
import answer4_projects from '../assets/images/answer4_projects.png'
import answer4_skills from '../assets/images/answer4_skills.png'
import answer4_values from '../assets/images/answer4_values.png'
import answer4_work from '../assets/images/answer4_work.png'
import answer5_projects from '../assets/images/answer5_projects.png'
import answer5_skills from '../assets/images/answer5_skills.png'
import answer5_values from '../assets/images/answer5_values.png'
import answer5_work from '../assets/images/answer5_work.png'
import bg_elevator from '../assets/images/bg_elevator.png'
import bg_elevatorMenu from '../assets/images/bg_elevatorMenu.svg'
import bg_floor1 from '../assets/images/bg_floor1.png'
import bg_floor2 from '../assets/images/bg_floor2.png'
import bg_floor3 from '../assets/images/bg_floor3.png'
import bg_floor4 from '../assets/images/bg_floor4.png'
import bg_floor5 from '../assets/images/bg_floor5.png'
import bg_floor6 from '../assets/images/bg_floor6.png'
import elevator1 from '../assets/images/elevator1.png'
import elevator2 from '../assets/images/elevator2.png'
import elevator_hint from '../assets/images/elevator_hint.png'
import finish from '../assets/images/finish.png'
import finish_business from '../assets/images/finish_business.png'
import finish_corporate from '../assets/images/finish_corporate.png'
import finish_credit from '../assets/images/finish_credit.png'
import finish_finance from '../assets/images/finish_finance.png'
import finish_hr from '../assets/images/finish_hr.png'
import finish_hr2 from '../assets/images/finish_hr2.png'
import finish_it from '../assets/images/finish_it.png'
import finish_service from '../assets/images/finish_service.png'
import finish_strategy from '../assets/images/finish_strategy.png'
import floor1_people from '../assets/images/floor1_people.png'
import floor1_start from '../assets/images/floor1_start.png'
import floor1CircleIcon from '../assets/images/floor1CircleIcon.png'
import floor1Finish from '../assets/images/floor1Finish.png'
import floor1FinishIcon from '../assets/images/floor1FinishIcon.png'
import floor1Icon from '../assets/images/floor1Icon.png'
import floor2_start from '../assets/images/floor2_start.png'
import floor2CircleIcon from '../assets/images/floor2CircleIcon.png'
import floor2Finish from '../assets/images/floor2Finish.png'
import floor2FinishIcon from '../assets/images/floor2FinishIcon.png'
import floor2Icon from '../assets/images/floor2Icon.png'
import floor3_people from '../assets/images/floor3_people.png'
import floor3_start from '../assets/images/floor3_start.png'
import floor3CircleIcon from '../assets/images/floor3CircleIcon.png'
import floor3Finish from '../assets/images/floor3Finish.png'
import floor3FinishIcon from '../assets/images/floor3FinishIcon.png'
import floor3Icon from '../assets/images/floor3Icon.png'
import floor4_start from '../assets/images/floor4_start.png'
import floor4CircleIcon from '../assets/images/floor4CircleIcon.png'
import floor4Finish from '../assets/images/floor4Finish.png'
import floor4FinishIcon from '../assets/images/floor4FinishIcon.png'
import floor4Icon from '../assets/images/floor4Icon.png'
import floor5_people from '../assets/images/floor5_people.png'
import floor5_start from '../assets/images/floor5_start.png'
import floor5CircleIcon from '../assets/images/floor5CircleIcon.png'
import floor5Finish from '../assets/images/floor5Finish.png'
import floor5FinishIcon from '../assets/images/floor5FinishIcon.png'
import floor5Icon from '../assets/images/floor5Icon.png'
import floor6_start from '../assets/images/floor6_start.png'
import floor6CircleIcon from '../assets/images/floor6CircleIcon.png'
import floor6Icon from '../assets/images/floor6Icon.png'
import InfoIcon from '../assets/images/InfoIcon.svg'
import internship1 from '../assets/images/internship1.png'
import question1 from '../assets/images/question1.png'
import question2 from '../assets/images/question2.png'
import question3 from '../assets/images/question3.png'
import question4 from '../assets/images/question4.png'
import question5 from '../assets/images/question5.png'
import phone_mockup from '../assets/images/phone_mockup.png'
import rules_2048 from '../assets/images/rules_2048.png'
import rules_moveFigure from '../assets/images/rules_moveFigure.png'
import rules_points from '../assets/images/rules_points.png'
import rules_tetris from '../assets/images/rules_tetris.png'
import rules_wordGame from '../assets/images/rules_wordGame.png'
import start from '../assets/images/start.png'
import start2 from '../assets/images/start2.png'
import start3 from '../assets/images/start3.png'
import start4 from '../assets/images/start4.png'
import test1 from '../assets/images/test1.png'
import test_end from '../assets/images/test_end.png'
import landingBg from '../assets/images/landing_bgDesktop.png'
import landingBgMobile from '../assets/images/landing_bgMobile.png'

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
    [SCREENS.FINAL_4]: Final4,
}

const SCREEN_IMAGES_TO_PRELOAD = [
    answer1_projects,
    answer1_skills,
    answer1_values,
    answer1_work,
    answer2_projects,
    answer2_skills,
    answer2_values,
    answer2_work,
    answer3_projects,
    answer3_skills,
    answer3_values,
    answer3_work,
    answer4_projects,
    answer4_skills,
    answer4_values,
    answer4_work,
    answer5_projects,
    answer5_skills,
    answer5_values,
    answer5_work,
    bg_elevator,
    bg_elevatorMenu,
    bg_floor1,
    bg_floor2,
    bg_floor3,
    bg_floor4,
    bg_floor5,
    bg_floor6,
    elevator1,
    elevator2,
    elevator_hint,
    finish,
    finish_business,
    finish_corporate,
    finish_credit,
    finish_finance,
    finish_hr,
    finish_hr2,
    finish_it,
    finish_service,
    finish_strategy,
    floor1_people,
    floor1_start,
    floor1CircleIcon,
    floor1Finish,
    floor1FinishIcon,
    floor1Icon,
    floor2_start,
    floor2CircleIcon,
    floor2Finish,
    floor2FinishIcon,
    floor2Icon,
    floor3_people,
    floor3_start,
    floor3CircleIcon,
    floor3Finish,
    floor3FinishIcon,
    floor3Icon,
    floor4_start,
    floor4CircleIcon,
    floor4Finish,
    floor4FinishIcon,
    floor4Icon,
    floor5_people,
    floor5_start,
    floor5CircleIcon,
    floor5Finish,
    floor5FinishIcon,
    floor5Icon,
    floor6_start,
    floor6CircleIcon,
    floor6Icon,
    InfoIcon,
    internship1,
    question1,
    question2,
    question3,
    question4,
    question5,
    phone_mockup,
    rules_2048,
    rules_moveFigure,
    rules_points,
    rules_tetris,
    rules_wordGame,
    start,
    start2,
    start3,
    start4,
    test1,
    test_end,
    landingBg,
    landingBgMobile
]

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

    useImagePreloader(SCREEN_IMAGES_TO_PRELOAD)

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