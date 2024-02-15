import {useCallback, useRef} from "react";
import {DRAGGABLE_NAME} from "./constants";
import {useClickListener} from "../../../../hooks/useClickListener";


export function GameController({ active, children, onDragStart, onDragMove, onDragEnd }) {
    const targetRef = useRef()
    const lastTargetRef = useRef(null)

    const handleDragStart = useCallback((e) => {
        const { name, x, y } = e.target.dataset

        if (name !== DRAGGABLE_NAME) {
            return
        }

        onDragStart?.([x, y])
        lastTargetRef.current = [x, y]
    }, [onDragStart]);

    const handleDragMove = useCallback((e) => {
        const currentElement = document.elementFromPoint(e.x, e.y)
        const { name, x, y } = currentElement.dataset

        if (
            name !== DRAGGABLE_NAME
            || !lastTargetRef.current
            || (lastTargetRef.current[0] === x && lastTargetRef.current[1] === y)
        ) {
            return
        }

        onDragMove?.(lastTargetRef.current, [x, y])
        lastTargetRef.current = [x, y]
    }, [onDragMove]);

    const handleDragEnd = useCallback(
        (e) => {
            const currentElement = document.elementFromPoint(e.x, e.y)
            const { name, x, y } = currentElement.dataset

            if (name !== DRAGGABLE_NAME) {
                return
            }

            onDragEnd?.([x, y])
            lastTargetRef.current = null
        },
        [onDragEnd],
    );

    useClickListener({
        active,
        prevent: true,
        targetRef,
        onStart: handleDragStart,
        onMove: handleDragMove,
        onEnd: handleDragEnd,
    })

    return children(targetRef);
}