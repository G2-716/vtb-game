import styled from "@emotion/styled";
import { useDrop } from 'react-dnd';
import { rectTypes } from "./Rectangle";

const Wrapper = styled.div`
  width: var(--rectSize);
  height: var(--rectSize);
  border: 2px solid white;
  border-radius: 9px;
  background: #E9EFFC;
`;

export const Cell = ({onDrop, rowsAmount, id, rectSize}) => {
    const [, drop] = useDrop(() => ({
        accept: 'BLOCK',
        collect: monitor => ({
            hovered: monitor.canDrop() && monitor.isOver(),
        }),
        drop: (item, monitor) => {
            let isDownPartDrag, isLeftPartDrag;
            const isDoubleHeight = item.height === rectTypes.gameDouble;

            if (item.width === rectTypes.gameDouble) {
                let {x: itemX} = monitor.getInitialSourceClientOffset();
                const {x: dragX} = monitor.getInitialClientOffset();

                if (itemX - dragX > 0 && itemX - dragX <= rectSize) isLeftPartDrag = true;
            }

            if (isDoubleHeight) {
                const {y: itemY} = monitor.getInitialSourceClientOffset();
                const {y: dragY} = monitor.getInitialClientOffset();
                if (dragY - itemY >= rectSize + 5) {
                    isDownPartDrag = true;
                }
            }
            onDrop?.(item, id % 4, Math.floor(id / 4), isDownPartDrag, isLeftPartDrag);
        },
    }), []);

    return <Wrapper ref={drop} $rowsAmount={rowsAmount} />
};

