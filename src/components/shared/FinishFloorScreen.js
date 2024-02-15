import { useState } from "react";
import styled from "@emotion/styled";
import { SCREENS } from "../../constants/screens";
import { useProgress } from "../../contexts/ProgressContext";
import { ArrowButton } from "./ArrowButton";
import { FinishFloorModal } from "./FinishFloorModal";
import { useSizeRatio } from "../../contexts/SizeRatioContext";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${({background}) => background}) no-repeat 0 0 /cover;
`;

const ButtonStyled = styled(ArrowButton)`
    position: absolute;
    bottom: calc(35px * ${({$ratio}) => $ratio});
    right: calc(16px * ${({$ratio}) => $ratio});
`;

export const FinishFloorScreen = ({finishText, background, icon, children}) => {
    const [isShowModal, setIsShowModal] = useState(false);
    const {next} = useProgress();
    const ratio = useSizeRatio();

    return (
        <Wrapper background={background}>
            <FinishFloorModal opened={isShowModal} icon={icon} onClick={() => next(SCREENS.LIFT_3)} text={finishText}>
                {children}
            </FinishFloorModal>
            {!isShowModal && <ButtonStyled onClick={() => setIsShowModal(true)} $ratio={ratio}/>}
        </Wrapper>
    )
}