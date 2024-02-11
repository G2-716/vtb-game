import styled from "@emotion/styled";
import { ArrowButton } from "./ArrowButton";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${({ background }) => background}) no-repeat center 100% / cover;

    @media screen and (max-height: 650px) {
       background-position-y: 0;
    }
`;

const ButtonStyled = styled(ArrowButton)`
    position: absolute;
    bottom: min(35px, 9.6vw);
    right: min(16px, 4.2vw);
`;

export const BgScreenWrapper = ({onClick, isIcon, text, background, className}) => (
    <Wrapper className={className} background={background}>
        {isIcon ? (
            <ButtonStyled onClick={onClick} />
        ) : (
            <ButtonStyled onClick={onClick}>
                {text}
            </ButtonStyled>
        )}
    </Wrapper>
)