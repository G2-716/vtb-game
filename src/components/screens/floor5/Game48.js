import styled from "@emotion/styled";
import {useProgress} from "../../../contexts/ProgressContext";
import bg from '../../../assets/images/rules_tetris.png';
import { RulesScreen } from "../../shared/RulesScreen";
import { TetrisGame } from "./TetrisGame";
import { SCREENS } from "../../../constants/screens";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export function Game48() {
    const {next} = useProgress()

    return  (
        <Wrapper>
            <TetrisGame isRules />
            <RulesScreen background={bg} onNext={() => next()} onSkip={() => next(SCREENS.GAME_4_10)}/>
        </Wrapper>
    )
}