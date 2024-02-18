import { rectTypes } from './Rectangle';

export const rowsAmount = 4;

export const blocks = [
    {
        id: 0,
        x: 1,
        y: 0,
        width: rectTypes.game,
        height: rectTypes.gameDouble,
    },
    {
        id: 1,
        x: 2,
        y: 0,
        width: rectTypes.game,
        height: rectTypes.game,
    },
    {
        id: 2,
        x: 3,
        y: 0,
        width: rectTypes.game,
        height: rectTypes.game,
    },
    {
        id: 3,
        x: 0,
        y: 1,
        width: rectTypes.game,
        height: rectTypes.game,
    },
    {
        id: 4,
        x: 0,
        y: 2,
        width: rectTypes.game,
        height: rectTypes.gameDouble,
    },
    {
        id: 6,
        x: 3,
        y: 2,
        width: rectTypes.game,
        height: rectTypes.game,
    },
    {
        id: 8,
        x: 3,
        y: 3,
        width: rectTypes.game,
        height: rectTypes.game,
    },
    {
        id: 9,
        x: 2,
        y: 3,
        width: rectTypes.game,
        height: rectTypes.game,
    },
    {
        id: 'main',
        x: 2,
        y: 1,
        width: rectTypes.gameDouble,
        height: rectTypes.gameDouble,
        isMain: true
    }
];

export const winRow = 1;
export const winCol = 1;

export const empties = [
    {
        x: 0,
        y: 0,
    },
    {
        x: 3,
        y: 1,
    },
    {
        x: 1,
        y: 3,
    },
];
