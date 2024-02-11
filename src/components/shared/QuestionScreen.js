import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../../constants/colors";
import { useProgress } from "../../contexts/ProgressContext";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const Image = styled.img`
    margin-top: 14px;
    width: min(349px, 93vw);
    object-fit: contain;
`;

const Picture = styled(Image)`
    height: min(337px, 89vw);
    margin-bottom: 20px;
`;

const BigPicture = styled(Image)`
    height: min(352px, 94vw);
    margin-bottom: 8px;
    margin-left: -8px;
`;

const QuestionsBlock = styled.div`
    width: min(349px, 93vw);
`;

const HorizontalBlock = styled.div`
    display: flex;
    justify-content: space-between;

    & > div {
        margin-top: 0;
        padding-right: 17px;
    }

    & > div + div {
        margin-left: 10px;
    }
`;

const Answer = styled.div`
    font-size: 16px;
    background: ${({$isActive}) => $isActive ? 'white' : colors.gray};
    border: 2px solid ${colors.gray};
    border-radius: 15px;
    padding: 10px 20px;
    color: ${({$isActive}) => $isActive ? colors.gray : 'white'};
    white-space: pre-line;
    cursor: pointer;
    transition: background .2s;
    margin-top: 10px;
`;

const SkipAnswer = styled(Answer)`
    border: 2px solid ${colors.purple};
    background-color: ${colors.purple};
`;

export const QuestionScreen = ({ image, answerScreens, isBigPicture }) => {
    const {next} = useProgress();
    const [chosen, setChosen] = useState('');

    const ImageComponent = isBigPicture ? BigPicture : Picture;

    const handleChoose = (id, screen) => {
        setChosen(id);
        setTimeout(() => next(screen), 400);
    }

    return (
        <Wrapper>
            <ImageComponent src={image} alt={''} />
            <QuestionsBlock>
                <HorizontalBlock>
                    <Answer 
                        $isActive={chosen === 'projects'}
                        onClick={() => handleChoose('projects', answerScreens?.projects)}
                    >
                        {'Над какими\nпроектами\nвы работаете?'}
                    </Answer>
                    <Answer
                        $isActive={chosen === 'values'}
                        onClick={() => handleChoose('values', answerScreens?.values)}
                    >
                        {'Какая ценность\nВТБ вам наиболее\nблизка?'}
                    </Answer>
                </HorizontalBlock>
                <Answer
                    $isActive={chosen === 'skills'}
                    onClick={() => handleChoose('skills', answerScreens?.skills)}
                >  
                    Какие навыки вам важны для успешной работы?
                </Answer>
                <Answer
                    $isActive={chosen === 'work'}
                    onClick={() => handleChoose('work', answerScreens?.work)}
                >
                    За что вы любите стажировку в ВТБ?
                </Answer>
                <SkipAnswer onClick={() => next(answerScreens?.game)}>
                    Завершить диалог и перейти к игре
                </SkipAnswer>
            </QuestionsBlock>
        </Wrapper>
    )
}