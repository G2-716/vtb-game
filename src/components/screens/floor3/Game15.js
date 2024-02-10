import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/answer3_values.png';
import background from '../../../assets/images/bg_floor1.png';
import { BgImageScreen } from "../../shared/BgImageScreen";
import {SCREENS} from '../../../constants/screens';

export function Game15() {
    const {next} = useProgress()

    return <BgImageScreen image={pic} onClick={() => next(SCREENS.GAME_1_8)} background={background} isIcon/>
}