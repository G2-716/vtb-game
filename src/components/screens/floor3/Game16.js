import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/answer3_skills.png';
import background from '../../../assets/images/bg_floor1.png';
import { BgImageScreen } from "../../shared/BgImageScreen";
import {SCREENS} from '../../../constants/screens';

export function Game16() {
    const {next} = useProgress()

    return <BgImageScreen image={pic} onClick={() => next(SCREENS.GAME_1_8)} background={background} isIcon/>
}