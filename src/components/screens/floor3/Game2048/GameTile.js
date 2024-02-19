import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { CONTAINER_SIZE, TILE_COUNT_PER_DIMENSION, MERGE_ANIMATION_DURATION, MOVE_ANIMATION_DURATION } from "./constants";
import {useSizeRatio} from "../../../../contexts/SizeRatioContext";

const VALUE_TO_BACKGROUND = {
    2: '#C5D5FF',
    4: '#9AB6FF',
    8: '#85A6FF',
    16: '#7498F6',
    32: '#7498F6',
    64: '#6185E3',
    128: '#ACC3FF',
    256: '#A9C1FF',
    512: '#A3BCFF',
    1024: '#9EB9FF',
    2048: '#1856A8',
}

const VALUE_TO_COLOR = {
    2: '#4C6FCD',
    4: '#FFFFFF',
    8: '#FFFFFF',
    16: '#FFFFFF',
    32: '#FFFFFF',
    64: '#FFFFFF',
    128: '#FFFFFF',
    256: '#FFFFFF',
    512: '#FFFFFF',
    1024: '#FFFFFF',
    2048: '#FFFFFF',
}

const VALUE_TO_FONT_SIZE = {
    2: '52px',
    4: '52px',
    8: '52px',
    16: '45px',
    32: '45px',
    64: '45px',
    128: '38px',
    256: '38px',
    512: '38px',
    1024: '30px',
    2048: '30px',
}

const VALUE_TO_LINE_HEIGHT = {
    2: '62.4px',
    4: '62.4px',
    8: '62.4px',
    16: '54px',
    32: '54px',
    64: '54px',
    128: '45.6px',
    256: '45.6px',
    512: '45.6px',
    1024: '36px',
    2048: '36px',
}

const Tile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: ${({sizeRatio}) => `calc(${CONTAINER_SIZE / TILE_COUNT_PER_DIMENSION}px * ${sizeRatio})`};
    height: ${({sizeRatio}) => `calc(${CONTAINER_SIZE / TILE_COUNT_PER_DIMENSION}px * ${sizeRatio})`};
    border: ${({sizeRatio}) => `calc(1.5px * ${sizeRatio}) solid #FFFFFF`};
    border-radius: ${({sizeRatio}) => `calc(15px * ${sizeRatio})`};
    background: ${({value}) => VALUE_TO_BACKGROUND[value]};
    color: ${({value}) => VALUE_TO_COLOR[value]};
    font-family: 'ComicSansMs', 'VTB Group', sans-serif;
    font-size: ${({value, sizeRatio}) => `calc(${VALUE_TO_FONT_SIZE[value]} * ${sizeRatio})`};
    line-height: ${({value, sizeRatio}) => `calc(${VALUE_TO_LINE_HEIGHT[value]} * ${sizeRatio})`};
    font-weight: 400;
    transition-property: left, top, transform;
    transition-duration: ${MOVE_ANIMATION_DURATION}ms, ${MOVE_ANIMATION_DURATION}ms, ${MERGE_ANIMATION_DURATION}ms;
    left: ${({left, sizeRatio}) => left * sizeRatio}px;
    top: ${({top, sizeRatio}) => top * sizeRatio}px;
    transform: scale(${({scale}) => scale});
    z-index: ${({value}) => value};
`

export function GameTile({ position, value }) {
    const sizeRatio = useSizeRatio();
    const [scale, setScale] = useState(1);

    const positionToPixels = (position) => (position / TILE_COUNT_PER_DIMENSION) * CONTAINER_SIZE;

    useEffect(() => {
        setScale(1.15);
        setTimeout(() => setScale(1), MERGE_ANIMATION_DURATION);
    }, [value]);

    return (
        <Tile
            sizeRatio={sizeRatio}
            left={positionToPixels(position[0])}
            top={positionToPixels(position[1])}
            scale={scale}
            value={value}
        >
            {value}
        </Tile>
    );
}