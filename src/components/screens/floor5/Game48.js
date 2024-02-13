import styled from "@emotion/styled";
import {useProgress} from "../../../contexts/ProgressContext";
import bg from '../../../assets/images/rules_tetrisGame.png';
import { RulesScreen } from "../../shared/RulesScreen";
import { TetrisGame } from "./TetrisGame";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export function Game48() {
    const {next} = useProgress()

    return  (
        <Wrapper>
            <TetrisGame isRules />
            <RulesScreen background={bg} backgroundWidth='96%' onNext={() => next()} />
        </Wrapper>
    )
}