import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../../constants/colors";
import { useProgress } from "../../contexts/ProgressContext";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { LiftButton } from "./LiftButton";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const Image = styled.img`
    margin-top: calc(14px * ${({$ratio}) => $ratio});
    width: calc(349px * ${({$ratio}) => $ratio});
    object-fit: contain;
`;

const Picture = styled(Image)`
    height: calc(337px * ${({$ratio}) => $ratio});
    margin-bottom: calc(20px * ${({$ratio}) => $ratio});
`;

const BigPicture = styled(Image)`
    height: calc(352px * ${({$ratio}) => $ratio});
    margin-bottom: calc(8px * ${({$ratio}) => $ratio});
    margin-left: calc(0px - 8px * ${({$ratio}) => $ratio});
`;

const QuestionsBlock = styled.div`
    width: calc(349px * ${({$ratio}) => $ratio});
`;

const HorizontalBlock = styled.div`
    display: flex;
    justify-content: space-between;

    & > div {
        margin-top: 0;
        padding-right: calc(17px * ${({$ratio}) => $ratio});
    }

    & > div + div {
        margin-left: calc(10px * ${({$ratio}) => $ratio});
    }
`;

const LiftButtonStyled = styled(LiftButton)`
    right: calc((100% - 337px * ${({$ratio}) => $ratio}) / 2  + 2px);
`;

const Answer = styled.div`
    font-size: calc(16px * ${({$ratio}) => $ratio});
    background: ${({$isActive}) => $isActive ? 'white' : colors.darkBlue};
    border: 2px solid ${({$isActive}) => $isActive ? colors.gray :  colors.darkBlue};
    border-radius: calc(15px * ${({$ratio}) => $ratio});
    padding: calc(10px * ${({$ratio}) => $ratio}) calc(20px * ${({$ratio}) => $ratio});
    margin-top: calc(10px * ${({$ratio}) => $ratio});
    color: ${({$isActive}) => $isActive ? colors.gray : 'white'};
    white-space: pre-line;
    cursor: pointer;
    transition: background .2s;
`;

const SkipAnswer = styled(Answer)`
    border: 2px solid ${colors.purple};
    background-color: ${colors.purple};
`;

export const QuestionScreen = ({ image, answerScreens, isBigPicture, floorId }) => {
    const {next, addFloorAnswer, floorAnswers} = useProgress();
    const [chosen, setChosen] = useState('');
    const ratio = useSizeRatio();

    const ImageComponent = isBigPicture ? BigPicture : Picture;

    const handleChoose = (id, screen) => {
        setChosen(id);
        addFloorAnswer(floorId, id);
        setTimeout(() => next(screen), 400);
    }

    return (
        <Wrapper>
            <LiftButtonStyled $ratio={ratio}/>
            <ImageComponent src={image} alt={''} $ratio={ratio}/>
            <QuestionsBlock $ratio={ratio}>
                <HorizontalBlock>
                    <Answer 
                        $ratio={ratio}
                        $isActive={chosen === 'projects' || floorAnswers[floorId]?.includes('projects')}
                        onClick={() => handleChoose('projects', answerScreens?.projects)}
                    >
                        {'Над какими\nпроектами\nвы работаете?'}
                    </Answer>
                    <Answer
                        $ratio={ratio}
                        $isActive={chosen === 'values' || floorAnswers[floorId]?.includes('values')}
                        onClick={() => handleChoose('values', answerScreens?.values)}
                    >
                        {'Какая ценность\nВТБ вам наиболее\nблизка?'}
                    </Answer>
                </HorizontalBlock>
                <Answer
                    $ratio={ratio}
                    $isActive={chosen === 'skills' || floorAnswers[floorId]?.includes('skills')}
                    onClick={() => handleChoose('skills', answerScreens?.skills)}
                >  
                    Какие навыки вам важны для успешной работы?
                </Answer>
                <Answer
                    $ratio={ratio}
                    $isActive={chosen === 'work' || floorAnswers[floorId]?.includes('work') }
                    onClick={() => handleChoose('work', answerScreens?.work)}
                >
                    За что вы любите стажировку в ВТБ?
                </Answer>
                <SkipAnswer $ratio={ratio} onClick={() => next(answerScreens?.game)}>
                    Завершить диалог и перейти к игре
                </SkipAnswer>
            </QuestionsBlock>
        </Wrapper>
    )
}