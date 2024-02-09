import styled from "@emotion/styled";
import { Button, BUTTON_SIZE } from "./Button";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${({ background }) => background}) no-repeat center 100% / contain;
`;

const ButtonStyled = styled(Button)`
    position: absolute;
    bottom: min(35px, 9.6vw);
    right: min(16px, 4.2vw);
`;

export const BgScreenWrapper = ({onClick, isIcon, text, background, className}) => (
    <Wrapper className={className} background={background}>
        {isIcon ? (
            <ButtonStyled size={BUTTON_SIZE.sm} onClick={onClick}>
                <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.48 19.4001L13.88 19.4001L20.88 12.4001L0.880004 12.4001L0.880004 7.60012L20.88 7.60012L13.88 0.600121L19.48 0.600121L28.88 10.0001L19.48 19.4001Z" fill="white"/>
                </svg>
            </ButtonStyled>
        ) : (
            <ButtonStyled onClick={onClick}>
                {text}
            </ButtonStyled>
        )}
    </Wrapper>
)