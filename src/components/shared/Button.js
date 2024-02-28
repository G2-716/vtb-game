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
    [BUTTON_TYPES.filled]: colors.darkBlue,
    [BUTTON_TYPES.outlined]: 'transparent',
};

const TYPE_TO_COLOR = {
    [BUTTON_TYPES.filled]: 'white',
    [BUTTON_TYPES.outlined]: colors.gray,
};

const TYPE_TO_BORDER = {
    [BUTTON_TYPES.filled]: colors.darkBlue,
    [BUTTON_TYPES.outlined]: colors.gray,
};

const ButtonStyled = styled.button`
    --spacing: calc(8px * ${({$ratio}) => $ratio});
    --spacing_x2: calc(var(--spacing) * 2);
    --spacing_x4: calc(var(--spacing) * 4);

    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border:  2px solid ${({background, $type}) => background ?? TYPE_TO_BORDER[$type]};
    color: ${({$type}) => TYPE_TO_COLOR[$type]};
    background-color: ${({background, $type}) => background ?? TYPE_TO_BACKGROUND[$type]};
    padding: ${({$size}) => $size === BUTTON_SIZE.md ? 'var(--spacing_x2) var(--spacing_x4)' : 'var(--spacing) var(--spacing_x2)'};
    border-radius: calc(45px * ${({$ratio}) => $ratio});
    font-size: calc(18px * ${({$ratio}) => $ratio});
    font-weight: 600;
    width: max-content;
    cursor: pointer;
`;

const Content = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    opacity: ${({visible}) => visible ? '1' : '0'};
    transition: opacity 200ms;
`

const Loader = styled.svg`
    position: absolute;
    height: 100%;
    opacity: ${({visible}) => visible ? '1' : '0'};
    transition: opacity 200ms;
    pointer-events: none;
`

export const Button = ({ type = 'filled', size = 'md', buttonType, loading, disabled, children, onClick, ...props }) => {
    const ratio = useSizeRatio();

    function handleClick() {
        if (loading || disabled) {
            return
        }

        onClick?.()
    }

    return (
        <ButtonStyled $ratio={ratio} $type={type} $size={size} disabled={loading || disabled} type={buttonType} onClick={handleClick} {...props}>
            <Content visible={!loading}>{children}</Content>
            <Loader visible={loading} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle fill={TYPE_TO_COLOR[type]} stroke={TYPE_TO_COLOR[type]} strokeWidth="10" r="15" cx="40" cy="100">
                    <animate attributeName="opacity" calcMode="spline" dur="1" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
                </circle>
                <circle fill={TYPE_TO_COLOR[type]} stroke={TYPE_TO_COLOR[type]} strokeWidth="10" r="15" cx="100" cy="100">
                    <animate attributeName="opacity" calcMode="spline" dur="1" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
                </circle>
                <circle fill={TYPE_TO_COLOR[type]} stroke={TYPE_TO_COLOR[type]} strokeWidth="10" r="15" cx="160" cy="100">
                    <animate attributeName="opacity" calcMode="spline" dur="1" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
                </circle>
            </Loader>
        </ButtonStyled>
    );
}
