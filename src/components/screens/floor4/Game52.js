import { SCREENS } from "../../../constants/screens";
import { QuestionScreen } from "../../shared/QuestionScreen";
import questionImg from "../../../assets/images/question4.png";

export function Game52() {
    const answerScreens = {
        projects: SCREENS.GAME_5_3,
        values: SCREENS.GAME_5_4,
        skills: SCREENS.GAME_5_5,
        work: SCREENS.GAME_5_6,
        game: SCREENS.GAME_5_7
    }

    return <QuestionScreen answerScreens={answerScreens} image={questionImg} isBigPicture/>
}