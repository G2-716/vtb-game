import styled from "@emotion/styled"
import { SCREENS } from "../../constants/screens";
import { useProgress } from "../../contexts/ProgressContext";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Button, BUTTON_SIZE, BUTTON_TYPES } from "./Button";

const Wrapper = styled.div`
    position: absolute;
    inset: 0;
    background: url(${({background}) => background}) no-repeat 0 100% / cover;
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

export const RulesScreen = ({background, onNext}) => {
    const ratio = useSizeRatio();
    const {next} = useProgress();

    return (
        <Wrapper background={background}>
            <ButtonsWrapper $ratio={ratio}>
                <Button onClick={onNext}>Играть</Button>
                <Button 
                    size={BUTTON_SIZE.sm} 
                    type={BUTTON_TYPES.outlined}
                    onClick={() => next(SCREENS.LIFT_3)}
                >
                    Пропустить
                </Button>
            </ButtonsWrapper>
        </Wrapper>
    )
}