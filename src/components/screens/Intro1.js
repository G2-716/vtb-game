import {useProgress} from "../../contexts/ProgressContext";
import pic from '../../assets/images/start.png';
import {BgScreenWrapper} from '../shared/BgScreenWrapper';

export function Intro1() {
    const {next} = useProgress()

    return (
        <BgScreenWrapper background={pic} onClick={() => next()} text="Вперёд" />
    )
}