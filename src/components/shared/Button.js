import styled from '@emotion/styled';
import { colors } from '../../constants/colors';
import { useSizeRatio } from '../../contexts/SizeRatioContext';

export const BUTTON_TYPES = {
    filled: 'filled',
    outlined: 'outlined',
};

export const BUTTON_SIZE = {
    md: 'md',
    sm: 'sm',
};

const TYPE_TO_BACKGROUND = {
    [BUTTON_TYPES.filled]: colors.gray,
    [BUTTON_TYPES.outlined]: 'transparent',
};

const TYPE_TO_COLOR = {
    [BUTTON_TYPES.filled]: 'white',
    [BUTTON_TYPES.outlined]: colors.gray,
};

const ButtonStyled = styled.button`
    --spacing: calc(10px * ${({$ratio}) => $ratio});
    --spacing_x2: calc(var(--spacing) * 2);
    --spacing_x4: calc(var(--spacing) * 4);

    display: inline-flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border:  2px solid ${({background}) => background ?? colors.gray};
    color: ${({$type}) => TYPE_TO_COLOR[$type]};
    background-color: ${({background, $type}) => background ?? TYPE_TO_BACKGROUND[$type]};
    padding: ${({$size}) => $size === BUTTON_SIZE.md ? 'var(--spacing_x2) var(--spacing_x4)' : 'var(--spacing) var(--spacing_x2)'};
    border-radius: calc(45px * ${({$ratio}) => $ratio});
    font-size: calc(18px * ${({$ratio}) => $ratio});
    width: max-content;
    font-weight: 600;
    cursor: pointer;
`;

export const Button = ({ type = 'filled', size = 'md', buttonType, ...props }) => {
    const ratio = useSizeRatio();

    return <ButtonStyled $ratio={ratio} $type={type} $size={size} type={buttonType} {...props} />;
}
