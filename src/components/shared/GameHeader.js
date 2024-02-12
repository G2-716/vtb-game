import styled from "@emotion/styled";
import { useState } from "react";
import { SCREENS } from "../../constants/screens";
import { useProgress } from "../../contexts/ProgressContext";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { SkipModal } from './SkipModal';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 14px 24px 0 18px;
    align-items: baseline;
`;

const Title = styled.h3`
    font-size: calc(40px * ${({$ratio}) => $ratio});
    line-height: calc(32px * ${({$ratio}) => $ratio});
    width: min-content;
    color: #1856A8;
`;

const RulesButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    width: calc(33px * ${({$ratio}) => $ratio});
    height: calc(33px * ${({$ratio}) => $ratio});
    margin-left: calc(10px * ${({$ratio}) => $ratio});
    border-radius: 50%;
    border: 2px solid rgba(76, 111, 205, 1);
    color: rgba(76, 111, 205, 1);
    font-size: calc(20px * ${({$ratio}) => $ratio});
    font-weight: 700;
    cursor: pointer;
`;

const SkipButton = styled.p`
    margin-left: auto;
    color: rgba(0,0,0,0.2);
    text-decoration: underline;
    font-size: calc(18px * ${({$ratio}) => $ratio});
    cursor: pointer;
`;


export const GameHeader = ({ title, onClickRules, onSkip, isShownButtons = true }) => {
    const [isSkipModal, setIsSkipModal] = useState(false);
    const ratio = useSizeRatio();
    const {next} = useProgress();

    const handleSkip = () => {
        setIsSkipModal(prev => !prev);
        onSkip?.(!isSkipModal);
    };

    return (
        <>
            <Wrapper $ratio={ratio}>
                <Title $ratio={ratio}>{title}</Title>
                {isShownButtons && ( 
                    <>
                        {onClickRules && <RulesButton $ratio={ratio} onClick={onClickRules}>?</RulesButton>}
                        <SkipButton $ratio={ratio} onClick={handleSkip}>Пропустить</SkipButton>
                    </>
                )}
            </Wrapper>
            {isSkipModal && (<SkipModal onContinue={handleSkip} onSkip={() => next(SCREENS.LIFT_3)}/>)}
        </>
    )
}