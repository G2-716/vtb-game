import styled from "@emotion/styled";
import Color from 'color';
import {CONTAINER_SIZE, DRAGGABLE_NAME, POINTS, TILE_COUNT_PER_DIMENSION} from "./constants";
import {useSizeRatio} from "../../../../contexts/SizeRatioContext";

const Wrapper = styled.div`
    position: relative;
    width: ${({sizeRatio}) => `calc(${CONTAINER_SIZE / TILE_COUNT_PER_DIMENSION}px * ${sizeRatio})`};
    height: ${({sizeRatio}) => `calc(${CONTAINER_SIZE / TILE_COUNT_PER_DIMENSION}px * ${sizeRatio})`};
    border: ${({sizeRatio}) => `calc(1.5px * ${sizeRatio}) solid #FFFFFF`};
    border-radius: ${({sizeRatio}) => `calc(15px * ${sizeRatio})`};
    background-color: ${({color, active}) => active ? Color(color).alpha(0.2).string() : '#E9EFFC'};
`

const Point = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${({sizeRatio, current}) => current ? '100%' : `calc(48px * ${sizeRatio})`};
    height: ${({sizeRatio, current}) => current ? '100%' : `calc(48px * ${sizeRatio})`};
    border-radius: 50%;
    background-color: ${({color}) => color};
    pointer-events: none;
    transition: width 200ms, height 200ms;
    z-index: 2;
`

const CurrentPoint = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({color}) => color};
    pointer-events: none;
    z-index: 3;
`

export function GameBoardCell({ position, point, current, active, color }) {
    const sizeRatio = useSizeRatio();

    return (
        <Wrapper
            data-name={DRAGGABLE_NAME}
            data-x={position[0]}
            data-y={position[1]}
            sizeRatio={sizeRatio}
            active={active}
            color={color}
        >
            {point ? (
                <Point sizeRatio={sizeRatio} current={current} color={POINTS[point].color} />
            ) : current ? (
                <CurrentPoint sizeRatio={sizeRatio} color={color} />
            ) : null}
        </Wrapper>
    );
}