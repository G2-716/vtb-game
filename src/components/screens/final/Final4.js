import {useEffect} from "react";
import styled from "@emotion/styled";
import {useProgress} from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { Button, BUTTON_SIZE, BUTTON_TYPES } from "../../shared/Button";
import {Modal} from '../../shared/Modal';
import { ResultText } from "../../shared/ResultText";
import pic from '../../../assets/images/test_end.png';
import { colors } from "../../../constants/colors";
import {saveToLeaderboard} from "../../../api/saveToLeaderboard";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #F3F7FA;
`;

const ModalStyled = styled(Modal)`
    top: calc(57px * ${({$ratio}) => $ratio});
    transform: translate(-50%, 0);
    padding: calc(20px * ${({$ratio}) => $ratio}) calc(10px * ${({$ratio}) => $ratio});
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

export function Final4() {
    const ratio = useSizeRatio();
    const {totalPoints, user} = useProgress();

    useEffect(() => {
        if (user) {
            saveToLeaderboard(user, totalPoints)
        }
    }, []);

    return (
        <Wrapper>
            <ModalStyled $ratio={ratio} opened>
                <ResultText points={totalPoints}/>
                <ButtonsBlock $ratio={ratio}>
                    <Button background={colors.blue}>Перейти к рейтингу{'\n'}игроков</Button>
                    <Button 
                        type={BUTTON_TYPES.outlined} 
                        size={BUTTON_SIZE.sm}
                    >
                        Завершить игру
                    </Button>
                </ButtonsBlock>
            </ModalStyled>
            <Picture src={pic} alt="" $ratio={ratio}/>
        </Wrapper>
    )
}