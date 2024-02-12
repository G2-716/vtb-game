import styled from '@emotion/styled';
import {Text} from './Text';
import {Modal} from './Modal';
import {Button, BUTTON_SIZE, BUTTON_TYPES} from './Button';
import { useSizeRatio } from '../../contexts/SizeRatioContext';

const ButtonWrapper = styled.div`
    margin-top: calc(40px * ${({$ratio}) => $ratio});

    & button + button {
        margin-top: calc(10px * ${({$ratio}) => $ratio});
    }
`;

export const SkipModal = ({onContinue, onSkip}) => {
    const ratio = useSizeRatio();

    return (
        <Modal>
            <Text>
                Уверен, что хочешь пропустить игру? Если пропустишь — не сможешь получить баллы
            </Text>
            <ButtonWrapper $ratio={ratio}>
                <Button size={BUTTON_SIZE.sm} onClick={onContinue}>
                    Играть
                </Button>
                <Button 
                    size={BUTTON_SIZE.sm} 
                    type={BUTTON_TYPES.outlined}
                    onClick={onSkip}
                >
                    Да, пропустить
                </Button>
            </ButtonWrapper>
        </Modal>
    )
}