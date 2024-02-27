import styled from "@emotion/styled";
import {useProgress} from "../../../contexts/ProgressContext";
import bg from '../../../assets/images/rules_2048.png';
import { RulesScreen } from "../../shared/RulesScreen";
import { SCREENS } from "../../../constants/screens";
import { Game2048 } from "./Game2048";
import { reachMetrikaGoal } from "../../../utils/reachMetrikaGoal";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export function Game18() {
    const {next} = useProgress()

    const handleNext = () => {
        reachMetrikaGoal('start_kib')
        next()
    }

    return  (
        <Wrapper>
            <Game2048 isRules />
            <RulesScreen background={bg} onNext={handleNext} onSkip={() => next(SCREENS.GAME_1_10)}/>
        </Wrapper>
    )
}