import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/floor2_start.png';
import background from '../../../assets/images/bg_elevator.png';
import { BgImageScreen } from "../../shared/BgImageScreen";

export function Game21() {
    const {next} = useProgress()

    return <BgImageScreen image={pic} onClick={() => next()} background={background} isLift/>
}