import { useEffect } from "react";
import { SCREENS } from "../../../constants/screens";
import { QuestionScreen } from "../../shared/QuestionScreen";
import questionImg from "../../../assets/images/question2.png";
import { useProgress } from "../../../contexts/ProgressContext";

export function Game22() {
    const {addVisitedFloor} = useProgress()

    const answerScreens = {
        projects: SCREENS.GAME_2_3,
        values: SCREENS.GAME_2_4,
        skills: SCREENS.GAME_2_5,
        work: SCREENS.GAME_2_6,
        game: SCREENS.GAME_2_7
    }


    useEffect(() => {
        addVisitedFloor(2);
    }, [addVisitedFloor])


    return <QuestionScreen answerScreens={answerScreens} image={questionImg} floorId={2} isBigPicture />
}