import {useCallback, useEffect, useState} from "react";


export function GameController({ children, onMoveUp, onMoveDown, onMoveLeft, onMoveRight }) {
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);

    const handleKeyDown = useCallback(
        (e) => {
            e.preventDefault();

            switch (e.code) {
                case "ArrowUp":
                    onMoveUp();
                    break;
                case "ArrowDown":
                    onMoveDown();
                    break;
                case "ArrowLeft":
                    onMoveLeft();
                    break;
                case "ArrowRight":
                    onMoveRight();
                    break;
            }
        },
        [onMoveDown, onMoveUp, onMoveRight, onMoveLeft],
    );

    const handleTouchStart = useCallback((e) => {
        e.preventDefault();

        setStartX(e.touches[0].clientX);
        setStartY(e.touches[0].clientY);
    }, []);

    const handleTouchEnd = useCallback(
        (e) => {
            e.preventDefault();

            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const deltaX = endX - startX;
            const deltaY = endY - startY;

            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 0) {
                    onMoveRight();
                } else {
                    onMoveLeft();
                }
            } else {
                if (deltaY > 0) {
                    onMoveDown();
                } else {
                    onMoveUp();
                }
            }

            setStartX(0);
            setStartY(0);
        },
        [startX, startY, onMoveDown, onMoveUp, onMoveRight, onMoveLeft],
    );

    useEffect(() => {
        window.addEventListener("touchstart", handleTouchStart, { passive: false });
        window.addEventListener("touchend", handleTouchEnd, { passive: false });
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleTouchStart, handleTouchEnd, handleKeyDown]);

    return children;
}