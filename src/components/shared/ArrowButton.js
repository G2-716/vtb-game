import styled from "@emotion/styled";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Button, BUTTON_SIZE } from "./Button";

const SvgStyled = styled.svg`
    width: calc(29px * ${({$ratio}) => $ratio});
    height: calc(20px * ${({$ratio}) => $ratio});
    margin-top: calc(2px * ${({$ratio}) => $ratio});
`;

export const ArrowButton = (props) => {
    const ratio = useSizeRatio();

    return (
        <Button {...props} size={BUTTON_SIZE.sm}>
            <SvgStyled $ratio={ratio} viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.48 19.4001L13.88 19.4001L20.88 12.4001L0.880004 12.4001L0.880004 7.60012L20.88 7.60012L13.88 0.600121L19.48 0.600121L28.88 10.0001L19.48 19.4001Z" fill="white"/>
            </SvgStyled>
        </Button>
    )
}