import { useEffect } from "react";
import { SCREENS } from "../../../constants/screens";
import { QuestionScreen } from "../../shared/QuestionScreen";
import questionImg from "../../../assets/images/question4.png";
import { useProgress } from "../../../contexts/ProgressContext";

export function Game52() {
    const {addVisitedFloor} = useProgress()

    const answerScreens = {
        projects: SCREENS.GAME_5_3,
        values: SCREENS.GAME_5_4,
        skills: SCREENS.GAME_5_5,
        work: SCREENS.GAME_5_6,
        game: SCREENS.GAME_5_7
    }


    useEffect(() => {
        addVisitedFloor(4)
    }, [addVisitedFloor])

    return <QuestionScreen answerScreens={answerScreens} image={questionImg} isBigPicture/>
}