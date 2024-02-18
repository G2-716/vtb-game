import styled from "@emotion/styled";

export const rectTypes = {
    game: 'game',
    gameDouble: 'gameDouble',
}

const TYPE_TO_COLORS = {
    main: '#AF00FF',
    second: '#0096FF',
}

const TYPE_TO_SIZE = {
    [rectTypes.game]: 'var(--rectSize)',
    [rectTypes.gameDouble]: 'calc(var(--rectSize) * 2)',
    complicated: 'var(--rectSize)',
}

const RectangleStyled = styled.div`
  width: ${({ width, height }) => width === height ? TYPE_TO_SIZE.complicated : TYPE_TO_SIZE[width]};
  height: ${({height}) => TYPE_TO_SIZE[height]};
  background-color: ${({color}) => TYPE_TO_COLORS[color]};
  border-radius: 10px;
  border: 2px solid white;
`;

export const Rectangle = ({width, height, color="second", className, children}) => (
    <RectangleStyled className={className} width={width} height={height} color={color}>
        {children}
    </RectangleStyled>
);