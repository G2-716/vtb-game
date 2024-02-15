import styled from "@emotion/styled";
import { SCREENS } from "../../../constants/screens";
import {useProgress} from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { Button, BUTTON_SIZE, BUTTON_TYPES } from "../../shared/Button";
import {Modal} from '../../shared/Modal';
import { ResultText } from "../../shared/ResultText";
import pic from '../../../assets/images/test_end.png';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #F3F7FA;
`;

const ModalStyled = styled(Modal)`
    top: calc(57px * ${({$ratio}) => $ratio});
    transform: translate(-50%, 0);
`;

const ButtonsBlock = styled.div`
    margin-top: calc(45px * ${({$ratio}) => $ratio});

    & button + button {
        margin-top: calc(10px * ${({$ratio}) => $ratio});
    }
`;

const Picture = styled.img`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: calc(185px * ${({$ratio}) => $ratio});
    height: calc(265px * ${({$ratio}) => $ratio});
    object-fit: contain;
`;

export function Test12() {
    const ratio = useSizeRatio();
    const {next, testPoints} = useProgress();

    return (
        <Wrapper>
            <ModalStyled $ratio={ratio}>
                <ResultText points={testPoints}/>
                <ButtonsBlock $ratio={ratio}>
                    <Button onClick={() => next(SCREENS.INTERNSHIP_2)}>К этажу стажировок</Button>
                    <Button 
                        type={BUTTON_TYPES.outlined} 
                        size={BUTTON_SIZE.sm}
                        onClick={() => next(SCREENS.FINAL_1)}
                    >
                        Завершить игру
                    </Button>
                </ButtonsBlock>
            </ModalStyled>
            <Picture src={pic} alt="" $ratio={ratio}/>
        </Wrapper>
    )
}