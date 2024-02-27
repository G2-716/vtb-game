import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/floor4_start.png';
import background from '../../../assets/images/bg_elevator.png';
import { BgImageScreen } from "../../shared/BgImageScreen";
import { reachMetrikaGoal } from "../../../utils/reachMetrikaGoal";

export function Game51() {
    const {next} = useProgress()

    const handleNext = () => {
        reachMetrikaGoal('to_tb');
        next()
    }

    return <BgImageScreen image={pic} onClick={handleNext} background={background} isLift/>
}