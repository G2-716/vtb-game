import styled from '@emotion/styled';
import { useSizeRatio } from '../../contexts/SizeRatioContext';
import { Button } from './Button';
import {Modal} from './Modal';
import {Text} from './Text';

const ModalStyled = styled(Modal)`
    padding: calc(20px * ${({$ratio}) => $ratio}) calc(16px * ${({$ratio}) => $ratio});
`;

const Icon = styled.div`
    width: 100%;
    height: calc(83px * ${({$ratio}) => $ratio});
    background: url(${({background}) => background}) center center no-repeat;
    background-size: contain;
    margin-bottom: calc(20px * ${({$ratio}) => $ratio});
`;

const ButtonStyled = styled(Button)`
    margin: calc(40px * ${({$ratio}) => $ratio}) auto 0;
`;

export const FinishFloorModal = ({ opened, text, icon, onClick, children}) => {
    const ratio = useSizeRatio();

    return (
        <ModalStyled opened={opened} $ratio={ratio}>
            {children ?? (<Icon background={icon} $ratio={ratio}/>)}
            <Text>{text}</Text>
            <ButtonStyled onClick={onClick} $ratio={ratio}>Продолжить</ButtonStyled>
        </ModalStyled>
    )
}