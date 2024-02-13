import { useState, useEffect } from "react";

import { buildBoard, nextBoard } from "../utils/board";

export const useBoard = ({
  active,
  rows,
  columns,
  player,
  resetPlayer,
  addLinesCleared,
}) => {
  const [board, setBoard] = useState(buildBoard({ rows, columns }));

  useEffect(() => {
    if (active) {
        setBoard((previousBoard) =>
            nextBoard({
                board: previousBoard,
                player,
                resetPlayer,
                addLinesCleared,
            })
        );
    }
  }, [active, player, resetPlayer, addLinesCleared]);

  return [board];
};
