import styled from '@emotion/styled';
import {Text} from './Text';
import {Modal} from './Modal';
import {Button, BUTTON_SIZE, BUTTON_TYPES} from './Button';

const ButtonWrapper = styled.div`
    margin-top: min(40px, 10vw);

    & button + button {
        margin-top: 10px;
    }
`;

export const SkipModal = ({onContinue, onSkip}) => (
    <Modal>
        <Text>
            Уверен, что хочешь пропустить игру? Если пропустишь — не сможешь получить баллы
        </Text>
        <ButtonWrapper>
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