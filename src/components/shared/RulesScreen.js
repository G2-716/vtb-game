import styled from "@emotion/styled"
import { useState } from "react";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Button, BUTTON_SIZE, BUTTON_TYPES } from "./Button";
import { SkipModal } from './SkipModal';

const Wrapper = styled.div`
    position: absolute;
    inset: 0;
    ${({$isBlurred}) => $isBlurred ? 'filter: blur(1.5px)' : ''};
`;

const Background = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;

const ButtonsWrapper = styled.div`
    position: absolute;
    bottom: calc(40px * ${({$ratio}) => $ratio});
    right: calc(40px * ${({$ratio}) => $ratio});

    display: flex;
    flex-direction: column;
    align-items: center;

    & button + button {
        margin-top: calc(10px * ${({$ratio}) => $ratio});
    }
`;

export const RulesScreen = ({background, onNext, onSkip}) => {
    const ratio = useSizeRatio();
    const [isSkip, setIsSkip] = useState(false);

    return (
        <>
            <Wrapper $isBlurred={isSkip}>
                <Background src={background} />
                <ButtonsWrapper $ratio={ratio}>
                    <Button onClick={onNext}>Играть</Button>
                    <Button 
                        size={BUTTON_SIZE.sm} 
                        type={BUTTON_TYPES.outlined}
                        onClick={() => setIsSkip(true)}
                    >
                        Пропустить
                    </Button>
                </ButtonsWrapper>
            </Wrapper>
            {isSkip && <SkipModal opened onContinue={onNext} onSkip={onSkip}/>}
        </>
    )
}