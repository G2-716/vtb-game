import styled from "@emotion/styled";
import { colors } from "../../constants/colors";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Text } from "./Text";

const Result = styled.h3`
    margin-top: calc(20px * ${({$ratio}) => $ratio});
    font-size: calc(45px * ${({$ratio}) => $ratio});
    line-height: calc(35px * ${({$ratio}) => $ratio});
    color: ${colors.purple};
    font-weight: bold;
`;

export const ResultText = ({points}) => {
    const ratio = useSizeRatio();
    
    let ending = 'ов';

    switch (points) {
        case 1: 
            ending = '';
            break;
        case 2: 
        case 3: 
        case 4: 
            ending = 'а';
            break;
        default:
            break;
    };

    return (
        <>
            <Text>Твой результат</Text>
            <Result $ratio={ratio}>{points}</Result>
            <Text style={{color: colors.purple}}>балл{ending}</Text>
        </>
    )
}
