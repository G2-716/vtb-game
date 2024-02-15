import styled from "@emotion/styled";
import { colors } from "../../constants/colors";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { ResultText } from "./ResultText";
import { Text } from "./Text";

const ButtonStyled = styled(Button)`
    margin: calc(40px * ${({$ratio}) => $ratio}) auto 0;
`;

export const EndGameModal = ({opened, points, onNext}) => {
    const ratio = useSizeRatio();
    let ending = 'ов';

    switch (points) {
        case 1: 
            ending = '';
            break;
        case 2: 
        case 3: 
        case 4: 
            ending = 'а';
            break;
        default:
            break;
    }
    
    return (
        <Modal opened={opened}>
            <ResultText points={points} />
            <ButtonStyled $ratio={ratio} onClick={onNext}>Продолжить</ButtonStyled>
        </Modal>
    )
}