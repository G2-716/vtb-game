import { useState } from "react";
import styled from "@emotion/styled";
import { SCREENS } from "../../constants/screens";
import { useProgress } from "../../contexts/ProgressContext";
import { ArrowButton } from "./ArrowButton";
import { FinishFloorModal } from "./FinishFloorModal";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${({background}) => background}) no-repeat 0 0 /cover;
`;

const ButtonStyled = styled(ArrowButton)`
    position: absolute;
    bottom: min(35px, 9.6vw);
    right: min(16px, 4.2vw);
`;

export const FinishFloorScreen = ({finishText, background, icon, children}) => {
    const [isShowModal, setIsShowModal] = useState(false);
    const {next} = useProgress();

    return (
        <Wrapper background={background}>
            {isShowModal ? (
                <FinishFloorModal icon={icon} onClick={() => next(SCREENS.LIFT_3)} text={finishText}>
                    {children}
                </FinishFloorModal>
            ) : (
                <ButtonStyled onClick={() => setIsShowModal(true)}/>
            )}
        </Wrapper>
    )
}