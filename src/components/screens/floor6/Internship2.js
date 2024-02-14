import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/internship1.png';
import background from '../../../assets/images/bg_floor6.png';
import { BgImageScreen } from "../../shared/BgImageScreen";

export function Internship2() {
    const {next} = useProgress()

    return <BgImageScreen image={pic} onClick={() => next()} background={background} text="Круто, давай посмотрим!"/>
}