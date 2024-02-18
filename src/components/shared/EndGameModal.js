import styled from "@emotion/styled";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { ResultText } from "./ResultText";

const ButtonStyled = styled(Button)`
    margin: calc(40px * ${({$ratio}) => $ratio}) auto 0;
`;

export const EndGameModal = ({opened, points, onNext}) => {
    const ratio = useSizeRatio();
    
    return (
        <Modal opened={opened}>
            <ResultText points={points} />
            <ButtonStyled $ratio={ratio} onClick={onNext}>Продолжить</ButtonStyled>
        </Modal>
    )
}