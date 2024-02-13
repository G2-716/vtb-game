import styled from "@emotion/styled";
import {useProgress} from "../../../contexts/ProgressContext";
import bg from '../../../assets/images/rules_2048Game.png';
import { RulesScreen } from "../../shared/RulesScreen";
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
            <RulesScreen background={bg} backgroundWidth='98%' onNext={() => next()} />
        </Wrapper>
    )
}