import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/answer4_work.png';
import background from '../../../assets/images/bg_floor4.png';
import { BgImageScreen } from "../../shared/BgImageScreen";
import {SCREENS} from '../../../constants/screens';
import styled from "@emotion/styled";

const Wrapper = styled(BgImageScreen)`
 @media screen and (max-height: 650px) {
       background-position-y: 60%;
    }

    @media screen and (min-width: 370px) and (max-height: 800px) {
        background-position-y: 60%;
    }
`;

export function Game56() {
    const {next} = useProgress()

    return <Wrapper image={pic} onClick={() => next(SCREENS.GAME_5_2)} background={background} isIcon/>
}