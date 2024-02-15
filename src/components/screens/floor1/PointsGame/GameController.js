import {useCallback, useEffect, useRef} from "react";
import {DRAGGABLE_NAME} from "./constants";


export function GameController({ active, children, onDragStart, onDragMove, onDragEnd }) {
    const targetRef = useRef()
    const lastTargetRef = useRef(null)

    const handleDragStart = useCallback((e) => {
        e.preventDefault();

        const { name, x, y } = e.target.dataset

        if (name !== DRAGGABLE_NAME) {
            return
        }

        onDragStart?.([x, y])
        lastTargetRef.current = [x, y]
    }, [onDragStart]);

    const handleDragMove = useCallback((e) => {
        e.preventDefault();

        const currentElement = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY)
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
            e.preventDefault();

            const currentElement = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
            const { name, x, y } = currentElement.dataset

            if (name !== DRAGGABLE_NAME) {
                return
            }

            onDragEnd?.([x, y])
            lastTargetRef.current = null
        },
        [onDragEnd],
    );

    useEffect(() => {
        if (active && targetRef.current) {
            targetRef.current.addEventListener("touchstart", handleDragStart, { passive: false });
            targetRef.current.addEventListener("touchend", handleDragEnd, { passive: false });
            targetRef.current.addEventListener("touchmove", handleDragMove, { passive: false });

            return () => {
                targetRef.current.removeEventListener("touchstart", handleDragStart);
                targetRef.current.removeEventListener("touchend", handleDragEnd);
                targetRef.current.removeEventListener("touchmove", handleDragMove);
            };
        }
    }, [active, handleDragStart, handleDragEnd, handleDragMove]);

    return children(targetRef);
}