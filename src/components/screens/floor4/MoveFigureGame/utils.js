const replaceEmptyBlocks = ({isNearEmptyBlocks, getChangedBlocks, prevCells, newEmptyCells}) => {
    if (!isNearEmptyBlocks) return {changedEmptyCells: prevCells, hasChanged: false};

    const changedEmptyCells = [...prevCells].filter(getChangedBlocks).concat(newEmptyCells);

    return { changedEmptyCells, hasChanged: true };
};

export const checkTripleBlockCanMove = ({prevCells, emptyY, emptyX, x, y}) => {
    let newEmptyCells = [];
    let isNearEmptyBlocks = false;
    if (x !== emptyX) {
        const isLeft = x - emptyX < 0;
        if (isLeft) {
            isNearEmptyBlocks = prevCells.find(cell => cell.x === x && cell.y === emptyY)
                && prevCells.find(cell => cell.x === x - 1 && cell.y === emptyY + 1);
                
            newEmptyCells = [
                {x: emptyX, y: emptyY},
                {x: emptyX , y: emptyY + 1}
            ];

            const getChangedBlocks = cell => !((cell.x === x && cell.y === emptyY) || cell.x === x - 1 && cell.y === emptyY + 1);

            return replaceEmptyBlocks({
                isNearEmptyBlocks, newEmptyCells, prevCells, getChangedBlocks
            });

        } else {
            isNearEmptyBlocks = prevCells.find(cell => cell.x === x && cell.y === emptyY)
                && prevCells.find(cell => cell.x === x && cell.y === emptyY + 1);
            newEmptyCells = [
                {x: emptyX - 1, y: emptyY + 1},
                {x: emptyX, y: emptyY},
            ];
            const getChangedBlocks = cell =>
                (!(cell.x === x && (cell.y === emptyY || cell.y === emptyY + 1)));

            return replaceEmptyBlocks({
                isNearEmptyBlocks, newEmptyCells, prevCells, getChangedBlocks
            });
        }
    } else if (y !== emptyY) {
        const isUp = y - emptyY < 0;
        if (isUp) {
            isNearEmptyBlocks = prevCells.find(cell => cell.y === y && cell.x === emptyX)
                && prevCells.find(cell => cell.y === y + 1 && cell.x === emptyX - 1);
            newEmptyCells = [
                {x: emptyX, y: emptyY + 1},
                {x: emptyX - 1, y: emptyY + 1}
            ];
            const getChangedBlocks = cell => !((cell.y === y && cell.x === emptyX) || (cell.y === y + 1 && cell.x === emptyX - 1));

            return replaceEmptyBlocks({
                isNearEmptyBlocks, newEmptyCells, prevCells, getChangedBlocks
            });
        } else {
            isNearEmptyBlocks = prevCells.find(cell => cell.x === emptyX && cell.y === y + 1)
                && prevCells.find(cell => cell.x === emptyX - 1 && cell.y === y + 1);
            newEmptyCells = [
                {x: emptyX, y: emptyY},
                {x: emptyX - 1, y: emptyY + 1}
            ]
            const getChangedBlocks = cell =>
                (!(cell.y === y + 1 && (cell.x === emptyX || cell.x === emptyX - 1)));

            return replaceEmptyBlocks({
                isNearEmptyBlocks, newEmptyCells, prevCells, getChangedBlocks
            });
        }
    }
};

export const checkDoubleHeightBlockCanMove = ({prevCells, emptyY, emptyX, x, y}) => {
    let newEmptyCells;
    let isNearEmptyBlocks;

    if (x !== emptyX) {
        const emptyXCells = prevCells.filter(cell => cell.x === x);
        isNearEmptyBlocks = emptyXCells.find(cell => cell.y === emptyY)
            && emptyXCells.find(cell => cell.y === emptyY + 1);
        newEmptyCells = [{x: emptyX, y: emptyY}, {x: emptyX, y: emptyY + 1}];
        const getChangedBlocks = cell => !(cell.x === x && (cell.y === y || cell.y === y + 1));

        return replaceEmptyBlocks({
            isNearEmptyBlocks, newEmptyCells, prevCells, getChangedBlocks
        });

    } else {
        isNearEmptyBlocks = prevCells.find(cell => cell.y === (y - cell.y < 0 ? y + 1 : y) && cell.x === x);
        newEmptyCells = [{x: emptyX, y: y - emptyY < 0 ? emptyY + 1 : emptyY}];
        const getChangedBlocks = cell => !(cell.x === x && (cell.y === (y - emptyY < 0 ? y : y + 1)));

        return replaceEmptyBlocks({
            isNearEmptyBlocks, newEmptyCells, prevCells, getChangedBlocks
        });
    }
}

export const checkSingleHeightBlockCanMove = ({prevCells, emptyY, emptyX, x, y}) => {
    const newEmptyCells = [{x: emptyX, y: emptyY}];
    const getChangedBlocks = cell => !(cell.x === x && cell.y === y);
    const isNearEmptyBlocks = prevCells.find(cell => cell.x === x && cell.y === y);
    return replaceEmptyBlocks({
        isNearEmptyBlocks, prevCells, newEmptyCells, getChangedBlocks
    })
};

export const getChangedEmptyBlocks = ({isDoubleWidth, isDoubleHeight, prevCells, emptyY, emptyX, x, y}) => {
    const isRect = !isDoubleHeight && !isDoubleWidth;
    const isTriple = isDoubleHeight && isDoubleWidth;
    if (isTriple) {
       return checkTripleBlockCanMove({prevCells, emptyX, emptyY, x, y});
    }
    if (isDoubleHeight) {
        return checkDoubleHeightBlockCanMove({prevCells, emptyX, emptyY, x, y});
    }
    if (isRect) {
        return checkSingleHeightBlockCanMove({prevCells, emptyX, emptyY, x, y})
    }
}