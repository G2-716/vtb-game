import styled from "@emotion/styled";
import {useSizeRatio} from "../../../../../contexts/SizeRatioContext";

const TYPE_TO_BACKGROUND = {
    i: '#2158EC',
    j: '#4F01AA',
    l: '#4F01AA',
    o: '#AF00FF',
    s: '#2158EC',
    t: '#AF00FF',
    z: '#0096FF',
}

const Cell = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #E9EFFC;
    border: ${({sizeRatio}) => `calc(0.75px * ${sizeRatio})`} solid #FFFFFF;
    border-radius: ${({sizeRatio}) => `calc(6px * ${sizeRatio})`};

    ${({type}) => type && `background-color: ${TYPE_TO_BACKGROUND[type]};`}
    ${({ghost}) => ghost && `opacity: 0.3;`}
    
    ${({hasTop}) => hasTop && `
        border-top: none;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    `}

    ${({hasBottom}) => hasBottom && `
        border-bottom: none;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    `}

    ${({hasLeft}) => hasLeft && `
        border-left: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    `}

    ${({hasRight}) => hasRight && `
        border-right: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    `}
`

export const BoardCell = ({ cell, hasTop, hasBottom, hasRight, hasLeft }) => {
    const sizeRatio = useSizeRatio()

    return (
        <Cell
            sizeRatio={sizeRatio}
            ghost={cell.ghost}
            type={cell.type}
            hasTop={hasTop}
            hasBottom={hasBottom}
            hasRight={hasRight}
            hasLeft={hasLeft}
        />
    );
}
