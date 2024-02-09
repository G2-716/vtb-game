import {useProgress} from "../../contexts/ProgressContext";
import { BgScreenWrapper } from "../shared/BgScreenWrapper";
import pic from "../../assets/images/elevator2.png";

export function Lift2() {
    const {next} = useProgress()

    return <BgScreenWrapper background={pic} onClick={() => next()} text="Хорошо!" />
}