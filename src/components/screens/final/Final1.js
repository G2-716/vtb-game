import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/finish.png';
import { BgScreenWrapper } from "../../shared/BgScreenWrapper";

export function Final1() {
    const {next} = useProgress()

    return (
        <BgScreenWrapper background={pic} onClick={() => next()} isIcon/>
    )
}