import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/floor1_people.png';
import background from '../../../assets/images/bg_floor1.png';
import { BgImageScreen } from "../../shared/BgImageScreen";
import { useEffect } from "react";
import styled from "@emotion/styled";

const Wrapper = styled(BgImageScreen)`
 @media screen and (max-height: 650px) {
       background-position-y: 65%;
    }

    @media screen and (min-width: 370px) and (max-height: 800px) {
        background-position-y: 65%;
    }
`;

export function Game32() {
    const {next, addVisitedFloor} = useProgress()

    useEffect(() => {
       addVisitedFloor(1)
    }, [addVisitedFloor])

    return <Wrapper image={pic} onClick={() => next()} background={background} isIcon/>
}