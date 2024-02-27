import styled from "@emotion/styled";
import {useProgress} from "../../../contexts/ProgressContext";
import bg from '../../../assets/images/rules_points.png';
import { RulesScreen } from "../../shared/RulesScreen";
import { SCREENS } from "../../../constants/screens";
import { PointsGame } from "./PointsGame";
import { reachMetrikaGoal } from "../../../utils/reachMetrikaGoal";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export function Game38() {
    const {next} = useProgress()

    const handleNext = () => {
        reachMetrikaGoal('start_rb')
        next()
    }

    return  (
        <Wrapper>
            <PointsGame isRules />
            <RulesScreen background={bg} onNext={handleNext} onSkip={() => next(SCREENS.GAME_3_10)}/>
        </Wrapper>
    )
}