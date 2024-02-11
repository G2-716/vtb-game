import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/answer2_projects.png';
import background from '../../../assets/images/bg_floor2.png';
import { BgImageScreen } from "../../shared/BgImageScreen";
import {SCREENS} from '../../../constants/screens';

export function Game23() {
    const {next} = useProgress()

    return <BgImageScreen image={pic} onClick={() => next(SCREENS.GAME_2_8)} background={background} isIcon/>
}