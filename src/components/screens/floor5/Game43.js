import { SCREENS } from "../../../constants/screens";
import { QuestionScreen } from "../../shared/QuestionScreen";
import questionImg from "../../../assets/images/question5.png";

export function Game43() {
    const answerScreens = {
        projects: SCREENS.GAME_4_4,
        values: SCREENS.GAME_4_5,
        skills: SCREENS.GAME_4_6,
        work: SCREENS.GAME_4_7,
        game: SCREENS.GAME_4_8
    }

    return <QuestionScreen answerScreens={answerScreens} image={questionImg} floorId={5} isBigPicture/>
}