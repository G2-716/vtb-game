import { SCREENS } from "../../../constants/screens";
import { QuestionScreen } from "../../shared/QuestionScreen";
import questionImg from "../../../assets/images/question1.png";

export function Game33() {
    const answerScreens = {
        projects: SCREENS.GAME_3_4,
        values: SCREENS.GAME_3_5,
        skills: SCREENS.GAME_3_6,
        work: SCREENS.GAME_3_7,
        game: SCREENS.GAME_3_8
    }

    return <QuestionScreen answerScreens={answerScreens} image={questionImg} floorId={1} />
}