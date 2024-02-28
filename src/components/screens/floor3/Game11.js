import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/floor3_start.png';
import background from '../../../assets/images/bg_elevator.png';
import { BgImageScreen } from "../../shared/BgImageScreen";
import { reachMetrikaGoal } from "../../../utils/reachMetrikaGoal";
import styled from "@emotion/styled";

const Wrapper = styled(BgImageScreen)`
 @media screen and (max-height: 650px) {
       background-position-y: 50%;
    }

    @media screen and (min-width: 370px) and (max-height: 800px) {
        background-position-y: 50%;
    }
`;


export function Game11() {
    const {next} = useProgress()

    const handleNext = () => {
        reachMetrikaGoal('to_kib');
        next()
    }

    return <Wrapper image={pic} onClick={handleNext} background={background} isLift/>
}