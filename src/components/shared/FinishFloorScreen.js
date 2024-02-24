import { useState } from "react";
import styled from "@emotion/styled";
import { SCREENS } from "../../constants/screens";
import { useProgress } from "../../contexts/ProgressContext";
import { FinishFloorModal } from "./FinishFloorModal";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Button } from "./Button";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${({background}) => background}) no-repeat 0 0 /cover;
    ${({$isBlurred}) => $isBlurred ? 'filter: blur(1.5px)' : ''};
`;

const ButtonStyled = styled(Button)`
    position: absolute;
    bottom: calc(35px * ${({$ratio}) => $ratio});
    right: calc(16px * ${({$ratio}) => $ratio});
`;

export const FinishFloorScreen = ({finishText, background, icon, children}) => {
    const [isShowModal, setIsShowModal] = useState(false);
    const {next} = useProgress();
    const ratio = useSizeRatio();

    return (
        <>
            <Wrapper background={background} $isBlurred={isShowModal}>
                <ButtonStyled onClick={() => next(SCREENS.LIFT_3)} $ratio={ratio}>В лифт</ButtonStyled>
            </Wrapper>
            {/* <FinishFloorModal opened={isShowModal} icon={icon} onClick={() => setIsShowModal(false)} text={finishText}>
                {children}
            </FinishFloorModal> */}
        </>
        
    )
}