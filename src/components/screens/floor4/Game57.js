import styled from "@emotion/styled";
import {useProgress} from "../../../contexts/ProgressContext";
import bg from '../../../assets/images/rules_moveFigure.png';
import { SCREENS } from "../../../constants/screens";
import { RulesScreen } from "../../shared/RulesScreen";
import { MoveFigureGame } from "./MoveFigureGame";
import { reachMetrikaGoal } from "../../../utils/reachMetrikaGoal";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export function Game57() {
    const {next} = useProgress()

    const handleNext = () =>{ 
        reachMetrikaGoal('start_tb')
        next()
    }
    
    return  (
        <Wrapper>
            <MoveFigureGame isDemo isBlurred/>
            <RulesScreen background={bg} onNext={handleNext} onSkip={() => next(SCREENS.GAME_5_9)}/>
        </Wrapper>
    )
}