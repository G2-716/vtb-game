import styled from "@emotion/styled";
import { useSizeRatio } from "../../contexts/SizeRatioContext";

const TextStyled = styled.p`
    font-size: calc(15px * ${({$ratio}) => $ratio});
    line-height: calc(19px * ${({$ratio}) => $ratio});
`;

export const Text = (props) => {
    const ratio = useSizeRatio();

    return <TextStyled {...props} $ratio={ratio} />
}