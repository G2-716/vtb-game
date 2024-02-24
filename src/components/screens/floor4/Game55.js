import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/answer4_skills.png';
import background from '../../../assets/images/bg_floor4.png';
import { BgImageScreen } from "../../shared/BgImageScreen";
import {SCREENS} from '../../../constants/screens';

export function Game55() {
    const {next} = useProgress()

    return <BgImageScreen image={pic} onClick={() => next(SCREENS.GAME_5_2)} background={background} isIcon/>
}