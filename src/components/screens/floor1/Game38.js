import styled from "@emotion/styled";
import {useProgress} from "../../../contexts/ProgressContext";
import bg from '../../../assets/images/rules_points.png';
import { RulesScreen } from "../../shared/RulesScreen";
import { LinesGame } from "./LinesGame";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export function Game38() {
    const {next} = useProgress()

    return  (
        <Wrapper>
            <LinesGame isRules />
            <RulesScreen background={bg} onNext={() => next()} />
        </Wrapper>
    )
}