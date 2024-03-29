import styled from "@emotion/styled";
import plural from 'plural-ru';
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

export const ResultText = ({points, totalPoints}) => {
    const ratio = useSizeRatio();
    
    return (
        <>
            <Text>Твой результат</Text>
            <Result $ratio={ratio}>{points}{totalPoints ? `/${totalPoints}` : ''}</Result>
            <Text style={{color: colors.purple}}>{plural(points, 'балл', 'балла', 'баллов')}</Text>
        </>
    )
}
