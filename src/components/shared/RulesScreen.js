import styled from "@emotion/styled"
import { SCREENS } from "../../constants/screens";
import { useProgress } from "../../contexts/ProgressContext";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Button, BUTTON_SIZE, BUTTON_TYPES } from "./Button";

const Wrapper = styled.div`
    position: absolute;
    inset: 0;
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

    return (
        <Wrapper>
            <Background src={background} />
            <ButtonsWrapper $ratio={ratio}>
                <Button onClick={onNext}>Играть</Button>
                <Button 
                    size={BUTTON_SIZE.sm} 
                    type={BUTTON_TYPES.outlined}
                    onClick={onSkip}
                >
                    Пропустить
                </Button>
            </ButtonsWrapper>
        </Wrapper>
    )
}