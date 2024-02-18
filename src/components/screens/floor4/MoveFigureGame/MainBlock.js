import styled from '@emotion/styled';
import { Rectangle, rectTypes } from './Rectangle';
import { useSizeRatio } from '../../../../contexts/SizeRatioContext';

const Wrapper = styled.div`
  position: absolute;
  transition: top 300ms, left 300ms, right 300ms, bottom 300ms;
  top: calc(${({y}) => y} * var(--rectSize));
  left: calc(${({x}) => x} * var(--rectSize));

  &::after {
    content: '';
    position: absolute;
    top: calc(var(--rectSize) - 13px);
    left: -13px;
    width: 15px;
    height: 15px;
    border: 8px solid #AF00FF;
    border-left: none;
    border-top: none;
    border-radius: 0 0 15px 0;
    z-index: 10;
  }
`;

const RectangleStyled = styled(Rectangle)`
  position: absolute;
  bottom: 0;
  left: calc(0px -  var(--rectSize));
  width: calc(var(--rectSize) + 3px);
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  border: 2px solid white;
  border-right: none;
  z-index: 3;
`;

const RectangleMainStyled = styled(Rectangle)`
  border-bottom-left-radius: 0;
  border: 2px solid white;
`;

export const MainBlock = ({ innerRef, block, ...props }) => {
    const additionalBlock = {...block, x: block.x - 1, y: block.y + 1, height: rectTypes.game}
    return (
        <Wrapper ref={innerRef} block={block} x={block.x} y={block.y} {...props}>
            <RectangleMainStyled {...block} color="main" />
            <RectangleStyled {...additionalBlock} color="main" />
        </Wrapper>
    );
};