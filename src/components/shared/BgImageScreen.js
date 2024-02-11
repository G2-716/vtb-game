import styled from "@emotion/styled";
import { BgScreenWrapper } from "./BgScreenWrapper";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${({background}) => background}) no-repeat 0 0 /cover;
`;

const ScreenStyled = styled(BgScreenWrapper)`
    position: absolute;
    z-index: 2;
    inset: 0;

    background-size: cover;

    @media screen and (max-height: 650px) {
       background-position-y: 0;
    }

    @media screen and (min-height: 800px) {
        background-size: contain;
    }

    @media screen and (max-width: 370px) and (min-height: 650px) {
        background-size: contain;
    }
`;

export const BgImageScreen = ({ image, onClick, background, isIcon }) => (
    <Wrapper background={background}>
        <ScreenStyled background={image} text={"Познакомиться"} onClick={onClick} isIcon={isIcon}/>
    </Wrapper>
)