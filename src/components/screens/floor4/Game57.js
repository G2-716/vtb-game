import styled from "@emotion/styled";
import {useProgress} from "../../../contexts/ProgressContext";
import bg from '../../../assets/images/rules_moveFigure.png';
import { SCREENS } from "../../../constants/screens";
import { RulesScreen } from "../../shared/RulesScreen";
import { MoveFigureGame } from "./MoveFigureGame";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export function Game57() {
    const {next} = useProgress()

    return  (
        <Wrapper>
            <MoveFigureGame isDemo isBlurred/>
            <RulesScreen background={bg} onNext={() => next(SCREENS.GAME_5_8)} />
        </Wrapper>
    )
}