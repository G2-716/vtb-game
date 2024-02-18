import { Rectangle, rectTypes } from './Rectangle';
import { useDrag, useDrop } from 'react-dnd';
import { mergeRefs } from 'react-merge-refs';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import { MainBlock } from './MainBlock';

const Wrapper = styled.div`
  position: absolute;
  top: calc(${({y}) => y} * var(--rectSize));
  left: calc(${({x}) => x} * var(--rectSize));
  transition: top 300ms, left 300ms, right 300ms, bottom 300ms;
`;

export const Block = ({block, onDrop, rectSize}) => {
  const [, drag, preview] = useDrag(() => ({
    type: 'BLOCK',
    item: () => {
      return block;
    },
    collect: monitor => ({
        isDragging: monitor.isDragging(),
    }),
}), [block]);

const [, drop] = useDrop(() => ({
    accept: 'BLOCK',
    collect: monitor => ({
        hovered: monitor.canDrop() && monitor.isOver(),
    }),
    drop: (item, monitor) => {
        let isDownPartDrag, isLeftPartDrag;
        let {x, y} = block;
        const dif = monitor.getDifferenceFromInitialOffset();

        if (item.width === rectTypes.gameDouble) {
            let {x: itemX} = monitor.getInitialSourceClientOffset();
            const {x: dragX} = monitor.getInitialClientOffset();

            if (dragX - itemX <= rectSize) isLeftPartDrag = true;
        }

        if (item.height === rectTypes.gameDouble) {
            const {y: itemY} = monitor.getInitialSourceClientOffset();
            const {y: dragY} = monitor.getInitialClientOffset();
            if (dragY - itemY >= rectSize + 5) {
                isDownPartDrag = true;
            }
        }

        if (block.id === item.id) {
            isDownPartDrag = false;
            isLeftPartDrag = false;

            if (Math.abs(dif.x) > Math.abs(dif.y)) {
                if (dif.x < 0) x = x - 1;
                else x = x + 1;
            }
            else {
                if (dif.y < 0) y = y - 1;
                else y = y + 1;
            }
        }

        if (Math.abs(dif.y) > rectSize && block.x !== item.x && block.width === rectTypes.gameDouble) {
            x = x + 1;
        }

        if (block.height === rectTypes.gameDouble && isDownPartDrag && isLeftPartDrag && block.y === item.y) {
          y = y + 1;
        }

        if (Math.abs(dif.x) > rectSize && (block.y !== item.y) && block.height === rectTypes.gameDouble) {
            y = y + 1;
        }

        onDrop?.(item, x, y, isDownPartDrag, isLeftPartDrag);
    },
}), [block]);

useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
}, [block, preview]);

if (block.isMain) return (
  <MainBlock innerRef={mergeRefs([drag, drop])} block={block}/>
);

return (
    <Wrapper
        ref={mergeRefs([drag, drop])}
        x={block.x}
        y={block.y}
        $isDraggable
    >
        <Rectangle {...block} color={block.isMain ? "main" : "second"} />
    </Wrapper>
);
}