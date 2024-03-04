import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/test1.png';
import background from '../../../assets/images/bg_floor6.png';
import { BgImageScreen } from "../../shared/BgImageScreen";

export function Test1() {
    const {next, startTest} = useProgress()

    const handleNext = () => {
        startTest();
        next();
    }

    return <BgImageScreen image={pic} onClick={handleNext} background={background} text="К тесту" isLift/>
}