import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/floor1_people.png';
import background from '../../../assets/images/bg_floor1.png';
import { BgImageScreen } from "../../shared/BgImageScreen";

export function Game32() {
    const {next} = useProgress()

    return <BgImageScreen image={pic} onClick={() => next()} background={background} isIcon/>
}