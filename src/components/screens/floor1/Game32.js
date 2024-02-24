import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/floor1_people.png';
import background from '../../../assets/images/bg_floor1.png';
import { BgImageScreen } from "../../shared/BgImageScreen";
import { useEffect } from "react";

export function Game32() {
    const {next, addVisitedFloor} = useProgress()

    useEffect(() => {
       addVisitedFloor(1)
    }, [addVisitedFloor])

    return <BgImageScreen image={pic} onClick={() => next()} background={background} isIcon/>
}