import isNil from "lodash/isNil";
import styled from "@emotion/styled";
import {GameTile} from "./GameTile";
import {TILE_COUNT_PER_DIMENSION, CONTAINER_SIZE} from "./constants";
import {useSizeRatio} from "../../../../contexts/SizeRatioContext";

const Board = styled.div`
    position: relative;
    width: ${({sizeRatio}) => `calc(${CONTAINER_SIZE}px * ${sizeRatio})`};
    height: ${({sizeRatio}) => `calc(${CONTAINER_SIZE}px * ${sizeRatio})`};
`

const Tiles = styled.div`
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
`

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Cell = styled.div`
    width: ${({sizeRatio}) => `calc(${CONTAINER_SIZE / TILE_COUNT_PER_DIMENSION}px * ${sizeRatio})`};
    height: ${({sizeRatio}) => `calc(${CONTAINER_SIZE / TILE_COUNT_PER_DIMENSION}px * ${sizeRatio})`};
    border: ${({sizeRatio}) => `calc(1.5px * ${sizeRatio}) solid #FFFFFF`};
    border-radius: ${({sizeRatio}) => `calc(15px * ${sizeRatio})`};
    background-color: #E9EFFC;
`

export function GameBoard({ className, tiles }) {
    const sizeRatio = useSizeRatio()

    const renderGrid = () => {
        const cells = [];
        const totalCellsCount = TILE_COUNT_PER_DIMENSION * TILE_COUNT_PER_DIMENSION;

        for (let index = 0; index < totalCellsCount; index += 1) {
            cells.push(<Cell key={index} sizeRatio={sizeRatio} />);
        }

        return cells;
    };

    const renderTiles = () => {
        return tiles.filter((tile) => !isNil(tile?.id)).map((tile) => (
            <GameTile key={`${tile.id}`} {...tile} />
        ));
    };

    return (
        <Board className={className} sizeRatio={sizeRatio}>
            <Tiles sizeRatio={sizeRatio}>{renderTiles()}</Tiles>
            <Grid sizeRatio={sizeRatio}>{renderGrid()}</Grid>
        </Board>
    );
}