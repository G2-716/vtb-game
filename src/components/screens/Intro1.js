import {useProgress} from "../../contexts/ProgressContext";
import pic from '../../assets/images/start.png';
import {BgScreenWrapper} from '../shared/BgScreenWrapper';
import { reachMetrikaGoal } from "../../utils/reachMetrikaGoal";

export function Intro1() {
    const {next} = useProgress()

    const handleNext = () => {
        reachMetrikaGoal('start')
        next()
    }

    return (
        <BgScreenWrapper background={pic} onClick={handleNext} text="Вперёд" />
    )
}