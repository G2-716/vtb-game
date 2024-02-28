import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/answer1_projects.png';
import background from '../../../assets/images/bg_floor1.png';
import { BgImageScreen } from "../../shared/BgImageScreen";
import {SCREENS} from '../../../constants/screens';
import styled from "@emotion/styled";

const Wrapper = styled(BgImageScreen)`
 @media screen and (max-height: 650px) {
       background-position-y: 65%;
    }

    @media screen and (min-width: 370px) and (max-height: 800px) {
        background-position-y: 65%;
    }
`;

export function Game34() {
    const {next} = useProgress()

    return <Wrapper image={pic} onClick={() => next(SCREENS.GAME_3_3)} background={background} isIcon/>
}