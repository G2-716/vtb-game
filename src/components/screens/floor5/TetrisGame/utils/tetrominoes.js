import {uid} from "uid";

export const TETROMINOES = {
  I: {
    shape: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    type: 'i',
  },
  J: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0]
    ],
    type: 'j',
  },
  L: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1]
    ],
    type: 'l',
  },
  O: {
    shape: [
      [1, 1],
      [1, 1]
    ],
    type: 'o',
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0]
    ],
    type: 's',
  },
  T: {
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0]
    ],
    type: 't',
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ],
    type: 'z',
  }
};

export const getTetromino = (key) => {
  const tetromino = TETROMINOES[key]
  const id = uid()
  const shape = tetromino.shape.map(rows => rows.map(cell => cell ? id : cell))

  return {...tetromino, shape}
}

export const randomTetromino = () => {
  const keys = Object.keys(TETROMINOES);
  const index = Math.floor(Math.random() * keys.length);
  const key = keys[index];
  return getTetromino(key);
};

export const rotate = ({ piece, direction }) => {
  const newPiece = piece.map((_, index) =>
    piece.map((column) => column[index])
  );

  if (direction > 0) return newPiece.map((row) => row.reverse());

  return newPiece.reverse();
};

export const transferToBoard = ({
  isOccupied,
  position,
  rows,
  shape,
  ghost,
  type,
}) => {
  shape.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell) {
        const occupied = isOccupied;
        const _y = y + position.row;
        const _x = x + position.column;
        rows[_y][_x] = { occupied, id: cell, type, ghost };
      }
    });
  });

  return rows;
};
