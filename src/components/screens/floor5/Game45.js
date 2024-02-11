import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/answer5_values.png';
import background from '../../../assets/images/bg_floor5.png';
import { BgImageScreen } from "../../shared/BgImageScreen";
import {SCREENS} from '../../../constants/screens';

export function Game45() {
    const {next} = useProgress()

    return <BgImageScreen image={pic} onClick={() => next(SCREENS.GAME_4_8)} background={background} isIcon/>
}