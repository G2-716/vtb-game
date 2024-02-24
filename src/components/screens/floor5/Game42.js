import { useEffect } from "react";
import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/floor5_people.png';
import background from '../../../assets/images/bg_floor5.png';
import { BgImageScreen } from "../../shared/BgImageScreen";

export function Game42() {
    const {next, addVisitedFloor} = useProgress()

    useEffect(() => {
        addVisitedFloor(5);
    }, [addVisitedFloor])

    return <BgImageScreen image={pic} onClick={() => next()} background={background} isIcon/>
}