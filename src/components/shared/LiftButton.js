import styled from "@emotion/styled";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { SCREENS } from '../../constants/screens';
import { useProgress } from "../../contexts/ProgressContext";
import { Button } from "./Button";

const ButtonStyled = styled(Button)`
    position: absolute;
    top: calc(24px * ${({$ratio}) => $ratio});
    right: calc(21px * ${({$ratio}) => $ratio});
    padding: calc(12px * ${({$ratio}) => $ratio}) calc(24px * ${({$ratio}) => $ratio});
    font-size: calc(11px * ${({$ratio}) => $ratio});
    z-index: 3;
`;

export const LiftButton = () => {
    const {next} = useProgress();
    const ratio = useSizeRatio();

    return <ButtonStyled $ratio={ratio} onClick={() => next(SCREENS.LIFT_3)}>В лифт</ButtonStyled>
}