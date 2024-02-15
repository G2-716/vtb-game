export const CONTAINER_SIZE = 340;

export const TILE_COUNT_PER_DIMENSION = 5;

export const DRAGGABLE_NAME = 'cell';

export const POINTS = {
    1: {
        id: 1,
        color: '#AF00FF',
    },
    2: {
        id: 2,
        color: '#0096FF',
    },
    3: {
        id: 3,
        color: '#2158EC',
    },
    4: {
        id: 4,
        color: '#4F01AA',
    },
}

export const INITIAL_POINTS = [
    [POINTS[1], null, null, null, POINTS[2]],
    [POINTS[2], POINTS[1], null, POINTS[3], null],
    [null, null, null, POINTS[4], null],
    [POINTS[3], POINTS[4], null, null, null],
    [null, null, null, null, null],
]