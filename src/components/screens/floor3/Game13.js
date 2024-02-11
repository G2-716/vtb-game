import { SCREENS } from "../../../constants/screens";
import { QuestionScreen } from "../../shared/QuestionScreen";
import questionImg from "../../../assets/images/question3.png";

export function Game13() {
    const answerScreens = {
        projects: SCREENS.GAME_1_4,
        values: SCREENS.GAME_1_5,
        skills: SCREENS.GAME_1_6,
        work: SCREENS.GAME_1_7,
        game: SCREENS.GAME_1_8
    }

    return <QuestionScreen answerScreens={answerScreens} image={questionImg} />
}