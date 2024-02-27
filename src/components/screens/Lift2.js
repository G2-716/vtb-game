import {useProgress} from "../../contexts/ProgressContext";
import { BgScreenWrapper } from "../shared/BgScreenWrapper";
import pic from "../../assets/images/elevator2.png";
import { reachMetrikaGoal } from "../../utils/reachMetrikaGoal";

export function Lift2() {
    const {next} = useProgress()

    const handleNext = () => {
        reachMetrikaGoal('to_lift')
        next()
    }

    return <BgScreenWrapper background={pic} onClick={handleNext} text="Хорошо!" />
}