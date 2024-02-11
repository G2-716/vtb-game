import { SCREENS } from "../../../constants/screens";
import { QuestionScreen } from "../../shared/QuestionScreen";
import questionImg from "../../../assets/images/question2.png";

export function Game22() {
    const answerScreens = {
        projects: SCREENS.GAME_2_3,
        values: SCREENS.GAME_2_4,
        skills: SCREENS.GAME_2_5,
        work: SCREENS.GAME_2_6,
        game: SCREENS.GAME_2_7
    }

    return <QuestionScreen answerScreens={answerScreens} image={questionImg} isBigPicture/>
}