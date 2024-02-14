import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../../../constants/colors";
import { testQuestions } from "../../../constants/testQuestions";
import { useProgress } from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { Button, BUTTON_SIZE, BUTTON_TYPES } from "../../shared/Button";

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: calc(52px * ${({$ratio}) => $ratio}) calc(158px * ${({$ratio}) => $ratio}) auto;
    grid-template-columns: 1fr;
    background: #F3F7FA;
`;

const Question = styled.p`
    font-size: calc(20px * ${({$ratio}) => $ratio});
    font-weight: 600;
    vertical-align: bottom;
    padding: 0 calc(25px * ${({$ratio}) => $ratio});
    display: flex;
    align-items: flex-end;
`;

const Amount = styled.h4`
    font-size: calc(25px * ${({$ratio}) => $ratio});
    margin-left: auto;
    margin-right: calc(16px * ${({$ratio}) => $ratio});
    display: flex;
    align-items: flex-end;
`;

const AnswersWrapper = styled.div`
    margin-top: 30px;
    padding: 0 calc(14px * ${({$ratio}) => $ratio});
`;

const Answer = styled.div`
    margin-top: calc(10px * ${({$ratio}) => $ratio});
    padding: calc(10px * ${({$ratio}) => $ratio}) calc(20px * ${({$ratio}) => $ratio});
    color: white;
    border-radius: calc(15px * ${({$ratio}) => $ratio});
    background: ${({$isActive}) => $isActive ? colors.purple : colors.gray};

    transition: background .3s ease-in;

    &:first-of-type {
        margin-top: 0;
    }
`;

const ButtonStyled = styled(Button)`
    position: absolute;
    bottom: calc(50px * ${({$ratio}) => $ratio});
    right: calc(16px * ${({$ratio}) => $ratio});
`;

export const TestWrapper = ({ number }) => {
    const { addTestPoints, next } = useProgress();
    const ratio = useSizeRatio();
    const [active, setActive] = useState({});
    const question = testQuestions[number - 1] ?? {};

    const handleNext = () => {
        if (active.isCorrect) addTestPoints();

        next();
    };

    return (
        <Wrapper $ratio={ratio}>
            <Amount $ratio={ratio}>{question.number}/{testQuestions.length}</Amount>
            <Question $ratio={ratio}>{question.text}</Question>
            <AnswersWrapper $ratio={ratio}>
                {question.answers.map(({id, text, isCorrect}) => (
                    <Answer key={id} onClick={() => setActive({id, isCorrect})} $isActive={active?.id === id} $ratio={ratio}>
                        {text}
                    </Answer>
                ))}
            </AnswersWrapper>
            <ButtonStyled $ratio={ratio} type={BUTTON_TYPES.outlined} size={BUTTON_SIZE.sm} onClick={handleNext}>
                {question.number === testQuestions.length ? 'Завершить' : 'Далее'}
            </ButtonStyled>
        </Wrapper>
    )
}