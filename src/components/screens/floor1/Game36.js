import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/answer1_skills.png';
import background from '../../../assets/images/bg_floor1.png';
import { BgImageScreen } from "../../shared/BgImageScreen";
import {SCREENS} from '../../../constants/screens';

export function Game36() {
    const {next} = useProgress()

    return <BgImageScreen image={pic} onClick={() => next(SCREENS.GAME_3_3)} background={background} isIcon/>
}