import { defaultCell } from "./cell";
import { movePlayer } from "./playerController";
import { transferToBoard } from "./tetrominoes";

export const buildBoard = ({ rows, columns }) => {
  const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell }))
  );

  return {
    rows: builtRows,
    size: { rows, columns }
  };
};

const findDropPosition = ({ board, position, shape }) => {
  let max = board.size.rows - position.row + 1;
  let row = 0;

  for (let i = 0; i < max; i++) {
    const delta = { row: i, column: 0 };
    const result = movePlayer({ delta, position, shape, board });
    const { collided } = result;

    if (collided) {
      break;
    }

    row = position.row + i;
  }

  return { ...position, row };
};

export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }) => {
  const { tetromino, position } = player;

  let rows = board.rows.map((row) =>
    row.map((cell) => (cell.occupied ? cell : { ...defaultCell }))
  );

  const dropPosition = findDropPosition({
    board,
    position,
    shape: tetromino.shape
  });

  rows = transferToBoard({
    isOccupied: player.isFastDropping,
    ghost: !player.isFastDropping,
    position: dropPosition,
    rows,
    shape: tetromino.shape,
    type: tetromino.type,
  });

  if (!player.isFastDropping) {
    rows = transferToBoard({
      isOccupied: player.collided,
      ghost: false,
      position,
      rows,
      shape: tetromino.shape,
      type: tetromino.type,
    });
  }

  const blankRow = rows[0].map((_) => ({ ...defaultCell }));
  let linesCleared = 0;
  rows = rows.reduce((acc, row) => {
    if (row.every((column) => column.occupied)) {
      linesCleared++;
      acc.unshift([...blankRow]);
    } else {
      acc.push(row);
    }

    return acc;
  }, []);

  if (linesCleared > 0) {
    addLinesCleared(linesCleared);
  }

  if (player.collided || player.isFastDropping) {
    resetPlayer();
  }

  return {
    rows,
    size: { ...board.size }
  };
};

export const hasCollision = ({ board, position, shape }) => {
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row;

    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column;

        if (
          board.rows[row] &&
          board.rows[row][column] &&
          board.rows[row][column].occupied
        ) {
          return true;
        }
      }
    }
  }

  return false;
};

export const isWithinBoard = ({ board, position, shape }) => {
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row;

    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column;
        const isValidPosition = board.rows[row] && board.rows[row][column];

        if (!isValidPosition) return false;
      }
    }
  }

  return true;
};
