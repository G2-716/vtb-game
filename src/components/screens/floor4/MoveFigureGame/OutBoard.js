import { useEffect, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { mergeRefs } from 'react-merge-refs';
import styled from '@emotion/styled';
import { useSizeRatio } from '../../../../contexts/SizeRatioContext';

const SIDE_TO_POSITION = {
    top: 'top: 0; left: 0;',
    bottom: 'bottom: 0; left: 0;',
    left: 'top: 0; left: 0;',
    right: 'top: 0; right: 0;'
}

const Wrapper = styled.div`
  position: absolute;
  width: ${({width}) => width ?? '100%'};
  height: ${({height}) => height ?? '100%'};
  ${({$side}) => SIDE_TO_POSITION[$side]};
`;

export const OutBoard = ({type, side, boardRef, rowsAmount, onDrop}) => {
    const [height, setHeight] = useState('100%');
    const ratio = useSizeRatio();
    const [width, setWidth] = useState('100%');
    const $ref = useRef();

    useEffect(() => {
        if (type === 'horizontal' && $ref?.current && boardRef?.current) {
            const {top, bottom} = $ref.current.getBoundingClientRect();
            const {top: boardTop, bottom: boardBottom} = boardRef.current.getBoundingClientRect();
            const curHeight = side === 'bottom' ?
                `${bottom - boardBottom}px` :
                `${boardTop - top}px`;
            setHeight(curHeight);
        } else if (type === 'vertical' && $ref?.current && boardRef?.current) {
            const {left, right} = $ref.current.getBoundingClientRect();
            const {left: boardLeft, right: boardRight} = boardRef.current.getBoundingClientRect();
            const curWidth = side === 'right' ?
                `${right - boardRight}px` :
                `${boardLeft - left}px`;
            setWidth(curWidth);
        }
    }, [boardRef, side, type, $ref, ratio]);

    const [, drop] = useDrop(() => ({
        accept: 'BLOCK',
        collect: monitor => ({
            hovered: monitor.canDrop() && monitor.isOver(),
        }),
        drop: (item) => {
            let x, y;
            switch (side) {
                case 'bottom':
                    x = item.x;
                    y = rowsAmount - 1;
                    break;
                case 'top':
                    x = item.x;
                    y = 0;
                    break;
                case 'left':
                    x = 0;
                    y = item.y;
                    break;
                case 'right':
                    x = 3;
                    y = item.y;
                    break;
                default:
                    return;
            }
            onDrop?.(item, x, y);
        },
    }), []);

    return (
        <Wrapper ref={mergeRefs([drop, $ref])} $side={side} height={height} width={width}/>
    )
}