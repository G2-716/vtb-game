import styled from "@emotion/styled";
import { useEffect } from "react";
import background from '../../../assets/images/floor6_start.png';
import { SCREENS } from "../../../constants/screens";
import { useProgress } from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { Button, BUTTON_SIZE } from "../../shared/Button";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${background}) no-repeat center 0 / contain;
`;

const ButtonsWrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    bottom: calc(50px * ${({$ratio}) => $ratio});
    right: 0;
    width: 100%;
    padding: 0 calc(14px * ${({$ratio}) => $ratio});
`;

const ButtonStyled = styled(Button)`
    font-size: calc(16px * ${({$ratio}) => $ratio});
    border-radius: calc(15px * ${({$ratio}) => $ratio});

    & span {
        width: max-content;
    }
`;


export const Internship1 = () => {
    const {next, addVisitedFloor} = useProgress()
    const ratio = useSizeRatio()

    useEffect(() => {
        addVisitedFloor(6)
    }, [addVisitedFloor])

    return (
        <Wrapper>
            <ButtonsWrapper $ratio={ratio}>
                <ButtonStyled size={BUTTON_SIZE.sm} $ratio={ratio} onClick={() => next(SCREENS.TEST_1)}>
                 Пройти тест
                </ButtonStyled>
                <ButtonStyled size={BUTTON_SIZE.sm} $ratio={ratio} onClick={() => next(SCREENS.INTERNSHIP_2)}>
                    Узнать о стажировках
                </ButtonStyled>
            </ButtonsWrapper>
        </Wrapper>
    )
}