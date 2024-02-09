import styled from "@emotion/styled";
import {useProgress} from "../../contexts/ProgressContext";
import background from "../../assets/images/bg_elevatorMenu.svg";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${background}) no-repeat center 0 / cover;
`;


export function Lift3() {
    const {next} = useProgress()

    return (
        <Wrapper>
            <h1>Lift3</h1>
            <button onClick={() => next()}>next</button>
        </Wrapper>
    )
}