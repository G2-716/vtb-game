import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/finish.png';
import { BgScreenWrapper } from "../../shared/BgScreenWrapper";
import { useEffect } from "react";

export function Final1() {
    const {next, saveLeaderboard} = useProgress()

    useEffect(() => {
        saveLeaderboard()
    }, [])

    return (
        <BgScreenWrapper background={pic} onClick={() => next()} isIcon/>
    )
}