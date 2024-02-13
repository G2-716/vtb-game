import styled from "@emotion/styled";
import {BoardCell} from "./BoardCell";
import {useSizeRatio} from "../../../../../contexts/SizeRatioContext";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({columns, sizeRatio}) => `repeat(${columns}, calc(26px * ${sizeRatio}))`};
  grid-template-rows: ${({rows, sizeRatio}) => `repeat(${rows}, calc(26px * ${sizeRatio}))`};
`

export const Board = ({ className, board }) => {
  const sizeRatio = useSizeRatio()

  return (
    <Wrapper className={className} sizeRatio={sizeRatio} rows={board.size.rows} columns={board.size.columns}>
      {board.rows.map((row, y) =>
        row.map((cell, x) => {
          const topCell = board.rows[y-1]?.[x]
          const bottomCell = board.rows[y+1]?.[x]
          const leftCell = board.rows[y]?.[x-1]
          const rightCell = board.rows[y]?.[x+1]

          const hasTop = cell?.id && topCell?.id && cell.id === topCell.id && cell.ghost === topCell.ghost
          const hasBottom = cell?.id && bottomCell?.id && cell.id === bottomCell.id && cell.ghost === bottomCell.ghost
          const hasLeft = cell?.id && leftCell?.id && cell.id === leftCell.id && cell.ghost === leftCell.ghost
          const hasRight = cell?.id && rightCell?.id && cell.id === rightCell.id && cell.ghost === rightCell.ghost


          return (
              <BoardCell
                  key={x * board.size.columns + x}
                  cell={cell}
                  hasTop={hasTop}
                  hasBottom={hasBottom}
                  hasLeft={hasLeft}
                  hasRight={hasRight}
              />
          )
        })
      )}
    </Wrapper>
  );
};
