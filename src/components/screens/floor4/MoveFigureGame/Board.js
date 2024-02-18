import styled from "@emotion/styled";
import {rowsAmount} from './constants';
import border from '../../../../assets/images/moveFigureBorder.svg';
import {Block} from './Block';
import { useSizeRatio } from "../../../../contexts/SizeRatioContext";
import { useMemo } from "react";
import { Cell } from "./Cell";

const Wrapper = styled.div`
  --rectSize: calc(218px * ${({$ratio})=> $ratio} / 4);
  display: grid;
  width: calc(var(--rectSize) * 4);
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  position: relative;
`;

const Container = styled.div`
  margin: calc(144px * ${({$ratio})=> $ratio}) auto calc(48px * ${({$ratio})=> $ratio});
  padding: calc(10px * ${({$ratio})=> $ratio});
  padding-left: calc(23px * ${({$ratio})=> $ratio});
  padding-right: calc(8px * ${({$ratio})=> $ratio});
  width: calc(249px * ${({$ratio})=> $ratio});
  height: calc(237px * ${({$ratio})=> $ratio});
  background: url(${border}) no-repeat center center;
  background-size: contain;
`;

export const Board = ({blocks, onDrop, innerRef }) => {
    const ratio = useSizeRatio();

    const rectSize = useMemo(() => 54 * ratio, [ratio]);

    return (
        <Container $ratio={ratio}>
            <Wrapper $ratio={ratio} ref={innerRef}>
                {Array.from({length: rowsAmount * 4}).map((_, i) => (
                    <Cell key={i} id={i} rowsAmount={rowsAmount} onDrop={onDrop} rectSize={rectSize}/>
                ))}
                {blocks.map(block => (
                    <Block key={block.id} block={block} rectSize={rectSize} onDrop={onDrop} />
                ))}
            </Wrapper>
        </Container>
    )
}