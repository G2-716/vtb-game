import styled from '@emotion/styled';
import { Button } from './Button';
import {Modal} from './Modal';
import {Text} from './Text';

const ModalStyled = styled(Modal)`
    padding: 20px 16px;
`;

const Icon = styled.div`
    width: 100%;
    height: 83px;
    background: url(${({background}) => background}) center center no-repeat;
    background-size: contain;
    margin-bottom: 20px;
`;

const ButtonStyled = styled(Button)`
    margin: 40px auto 0;
`;

export const FinishFloorModal = ({ text, icon, onClick, children}) => (
    <ModalStyled>
        {children ?? (<Icon background={icon} />)}
        <Text>{text}</Text>
        <ButtonStyled onClick={onClick}>Продолжить</ButtonStyled>
    </ModalStyled>
)