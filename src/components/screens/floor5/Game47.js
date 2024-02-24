import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/answer5_work.png';
import background from '../../../assets/images/bg_floor5.png';
import { BgImageScreen } from "../../shared/BgImageScreen";
import {SCREENS} from '../../../constants/screens';

export function Game47() {
    const {next} = useProgress()

    return <BgImageScreen image={pic} onClick={() => next(SCREENS.GAME_4_3)} background={background} isIcon/>
}