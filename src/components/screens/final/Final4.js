import styled from "@emotion/styled";
import {useProgress} from "../../../contexts/ProgressContext";
import pic from '../../../assets/images/test_end.png';
import { colors } from "../../../constants/colors";
import {usePrevious} from "../../../hooks/usePrevious";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { Button } from "../../shared/Button";
import {Modal} from '../../shared/Modal';
import { ResultText } from "../../shared/ResultText";
import { reachMetrikaGoal } from "../../../utils/reachMetrikaGoal";

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
    const {totalPoints} = useProgress();
    const previousTotalPoints = usePrevious(totalPoints)
    const points = totalPoints || previousTotalPoints || 0

    function goToRating() {
        reachMetrikaGoal('rating')
        window.open('https://vtbcareer.com', '_blank')
    }

    return (
        <Wrapper>
            <ModalStyled $ratio={ratio} opened>
                <ResultText points={points} totalPoints={65}/>
                <ButtonsBlock $ratio={ratio}>
                    <Button background={colors.blue} onClick={goToRating}>
                        Карьера в ВТБ
                    </Button>
                </ButtonsBlock>
            </ModalStyled>
            <Picture src={pic} alt="" $ratio={ratio}/>
        </Wrapper>
    )
}