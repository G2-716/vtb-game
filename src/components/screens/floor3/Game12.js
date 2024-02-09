import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/floor3_people.png';
import background from '../../../assets/images/bg_floor3.png';
import { BgImageScreen } from "../../shared/BgImageScreen";

export function Game12() {
    const {next} = useProgress()

    return <BgImageScreen image={pic} onClick={() => next()} background={background} isIcon/>
}