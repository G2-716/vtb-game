import styled from "@emotion/styled";
import {useProgress} from "../../../contexts/ProgressContext";
import bg from '../../../assets/images/rules_wordGame.png';
import { SCREENS } from "../../../constants/screens";
import { RulesScreen } from "../../shared/RulesScreen";
import { WordGame } from "./WordGame";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export function Game27() {
    const {next} = useProgress()

    return  (
        <Wrapper>
            <WordGame isHiddenKeyboard isBlurred/>
            <RulesScreen background={bg} onNext={() => next(SCREENS.GAME_2_8)} />
        </Wrapper>
    )
}