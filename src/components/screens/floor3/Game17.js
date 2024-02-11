import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/answer3_work.png';
import background from '../../../assets/images/bg_floor3.png';
import { BgImageScreen } from "../../shared/BgImageScreen";
import {SCREENS} from '../../../constants/screens';

export function Game17() {
    const {next} = useProgress()

    return <BgImageScreen image={pic} onClick={() => next(SCREENS.GAME_1_8)} background={background} isIcon/>
}