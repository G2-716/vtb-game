import styled from "@emotion/styled";
import {useProgress} from "../../contexts/ProgressContext";
import background from '../../assets/images/start4.png';
import { Button } from "../shared/Button";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${background}) no-repeat center 100% / contain;
`;

const ButtonStyled = styled(Button)`
    position: absolute;
    bottom: min(35px, 9.6vw);
    left: 50%;
    transform: translateX(-50%);
`;

export function Intro4() {
    const {next} = useProgress()

    return (
        <Wrapper>
            <ButtonStyled onClick={() => next()}>Зайти в лифт</ButtonStyled>
        </Wrapper>
    )
}