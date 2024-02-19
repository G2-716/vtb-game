import styled from "@emotion/styled";
import {useProgress} from "../../../contexts/ProgressContext";
import bg from '../../../assets/images/rules_2048.png';
import { RulesScreen } from "../../shared/RulesScreen";
import { SCREENS } from "../../../constants/screens";
import { Game2048 } from "./Game2048";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export function Game18() {
    const {next} = useProgress()

    return  (
        <Wrapper>
            <Game2048 isRules />
            <RulesScreen background={bg} onNext={() => next()} onSkip={() => next(SCREENS.GAME_1_10)}/>
        </Wrapper>
    )
}