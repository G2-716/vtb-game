import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/floor2_start.png';
import background from '../../../assets/images/bg_elevator.png';
import { BgImageScreen } from "../../shared/BgImageScreen";
import { reachMetrikaGoal } from "../../../utils/reachMetrikaGoal";
import styled from "@emotion/styled";

const Wrapper = styled(BgImageScreen)`
 @media screen and (max-height: 650px) {
       background-position-y: 70%;
    }

    @media screen and (min-width: 370px) and (max-height: 800px) {
        background-position-y: 70%;
    }
`;


export function Game21() {
    const {next} = useProgress()

    const handleNext = () => {
        reachMetrikaGoal('to_smb')
        next()
    }

    return <Wrapper image={pic} onClick={handleNext} background={background} isLift/>
}