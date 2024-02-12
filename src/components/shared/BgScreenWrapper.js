import styled from "@emotion/styled";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { ArrowButton } from "./ArrowButton";
import { Button } from "./Button";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${({ background }) => background}) no-repeat center 100% / contain;
`;

const ButtonArrowStyled = styled(ArrowButton)`
    position: absolute;
    bottom: calc(35px * ${({$ratio}) => $ratio});
    right: calc(16px * ${({$ratio}) => $ratio});
`;

const ButtonStyled = styled(Button)`
    position: absolute;
    bottom: calc(35px * ${({$ratio}) => $ratio});
    right: calc(16px * ${({$ratio}) => $ratio});
`;


export const BgScreenWrapper = ({onClick, isIcon, text, background, className}) => {
    const ratio = useSizeRatio();

    return (
        <Wrapper className={className} background={background}>
            {isIcon ? (
                <ButtonArrowStyled onClick={onClick} $ratio={ratio}/>
            ) : (
                <ButtonStyled onClick={onClick} $ratio={ratio}>
                    {text}
                </ButtonStyled>
            )}
        </Wrapper>
    )
}