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

export const SkipModal = ({opened, onContinue, onSkip}) => {
    const ratio = useSizeRatio();

    return (
        <Modal opened={opened}>
            <Text>
                Уверен, что хочешь завершить игру прямо сейчас?
            </Text>
            <ButtonWrapper $ratio={ratio}>
                <Button size={BUTTON_SIZE.sm} onClick={onContinue}>
                    Нет, продолжить игру
                </Button>
                <Button 
                    size={BUTTON_SIZE.sm} 
                    type={BUTTON_TYPES.outlined}
                    onClick={onSkip}
                >
                    Да, завершить игру
                </Button>
            </ButtonWrapper>
        </Modal>
    )
}