import styled from "@emotion/styled";
import { colors } from "../../constants/colors";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { Text } from "./Text";

const ButtonStyled = styled(Button)`
    margin: calc(40px * ${({$ratio}) => $ratio}) auto 0;
`;

const Result = styled.h3`
    margin-top: calc(20px * ${({$ratio}) => $ratio});
    font-size: calc(45px * ${({$ratio}) => $ratio});
    line-height: calc(35px * ${({$ratio}) => $ratio});
    color: ${colors.purple};
    font-weight: bold;
`;

export const EndGameModal = ({points, onNext}) => {
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
        <Modal>
            <Text>Твой результат</Text>
            <Result $ratio={ratio}>{points}</Result>
            <Text style={{color: colors.purple}}>балл{ending}</Text>
            <ButtonStyled $ratio={ratio} onClick={onNext}>Продолжить</ButtonStyled>
        </Modal>
    )
}