import {useProgress} from "../../contexts/ProgressContext";
import pic from '../../assets/images/start2.png';
import {BgScreenWrapper} from '../shared/BgScreenWrapper';

export function Intro2() {
    const {next} = useProgress()

    return <BgScreenWrapper background={pic} onClick={() => next()} text="Хорошо!" />
}