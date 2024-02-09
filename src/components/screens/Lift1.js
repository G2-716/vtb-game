import {useProgress} from "../../contexts/ProgressContext";
import { BgScreenWrapper } from "../shared/BgScreenWrapper";
import pic from "../../assets/images/elevator1.png";

export function Lift1() {
    const {next} = useProgress()

    return <BgScreenWrapper background={pic} onClick={() => next()} isIcon />
}