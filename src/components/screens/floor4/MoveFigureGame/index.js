import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { MouseTransition, TouchTransition, DndProvider } from 'react-dnd-multi-backend';
import { Board } from './Board';
import { rectTypes } from './Rectangle';
import { getChangedEmptyBlocks } from './utils';
import { blocks, rowsAmount, winCol, winRow, empties } from './constants';
import {GameHeader} from '../../../shared/GameHeader';
import {SkipModal} from '../../../shared/SkipModal';
import { OutBoard } from './OutBoard';
import { Text } from '../../../shared/Text';
import { useSizeRatio } from '../../../../contexts/SizeRatioContext';
import { useProgress } from '../../../../contexts/ProgressContext';
import { Timer } from '../../../shared/Timer';
import { Button } from '../../../shared/Button';
import { EndGameModal } from '../../../shared/EndGameModal';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    ${({$isBlurred}) => $isBlurred ? 'filter: blur(1.5px)' : ''};
    display: flex;
    flex-direction: column;
`;

const Description = styled(Text)`
    margin: calc(20px * ${({$ratio}) => $ratio}) calc(21px * ${({$ratio}) => $ratio}) 0;
`;

const TimerStyled = styled(Timer)`
    position: absolute;
    top: calc(124px * ${({$ratio}) => $ratio});
    left: calc(70px * ${({$ratio}) => $ratio});
    justify-content: flex-start;
`;

const ButtonStyled = styled(Button)`
    position: relative;
    margin: 0 auto;
    padding: calc(13px * ${({$ratio}) => $ratio}) calc(20px * ${({$ratio}) => $ratio});
    z-index: 100;

    & svg {
        width: calc(20px * ${({$ratio}) => $ratio});
        height: calc(19px * ${({$ratio}) => $ratio});
    }
`;

export const MoveFigureGame = ({isDemo, isBlurred}) => {
    const { next, addMoveFigurePoints } = useProgress();
    const [shownBlocks, setShownBlocks] = useState([...blocks]);
    const [, setEmptyCells] = useState([...empties]);
    const [isSkip, setIsSkip] = useState(false);
    
    const ratio = useSizeRatio();

    const freeExit = useRef(false);

    const handleRestart = () => {
        setEmptyCells([...empties]);
        setShownBlocks([...blocks]);
    }

    const [isTimer, setIsTimer] = useState(true);
    const [isFinished, setIsFinished] = useState(false);
    const [finishModal, setFinishModal] = useState({shown: false, points: 1});
    const $boardRef = useRef();

    const handleGetPoints = (time) => {
        if (!isFinished) return;

        const points = time <= 30 ? 3 : time <= 60 ? 2 : 1;
        setFinishModal({shown: true, points});
        addMoveFigurePoints(points);
    }

    const handleDropBlock = async (block, dropX, dropY, isDownPartDrag, isLeftPartDrag) => {
        if (freeExit.current && block.id === 'main' && (dropX === winCol - 1) && block.x === winCol && block.y === winRow) {
            setShownBlocks((prev) => {
                const changed = [...prev];
                const index = changed.findIndex(({id}) => id === 'main');
                changed[index] = {...block, x: 0};
                return changed;
            })
            setIsFinished(true);
            setIsTimer(false);

            return;
        }
        let x = dropX;
        let y = dropY;
        const isRect = block.height === rectTypes.game && block.width === rectTypes.game;
        const isDoubleHeight = block.height === rectTypes.gameDouble;
        const isDoubleWidth = block.width === rectTypes.gameDouble;

        if (isRect && x !== block.x && y !== block.y) return;

        if (isDoubleHeight && isDoubleWidth) {
            if (isDownPartDrag){
                y = y - 1;
                if (isLeftPartDrag) {
                    x = x + 1;
                } 
            }
            
        } else if (isDoubleHeight && isDownPartDrag && (x !== block.x || y > block.y)) {
            y = y - 1;
        }

        y = y + 1 > rowsAmount - 1 ? rowsAmount - 1 : y;
        x = x + 1 > 4 ? 3 : x;

        y = y > 0 ? y : 0;
        x = x > 0 ? x : 0;

        let newBlock = {...block};
        let distance = 1;

        if (Math.abs(block.x - x) > 0) {
            distance = block.x - x < 0 ? distance : -distance;
            for (let i = 0; i < Math.abs(block.x - x); i++) {
                newBlock = await handleDrop(newBlock, newBlock.x + distance, y);
                if (!newBlock) return;
            }
        } else if (Math.abs(block.y - y) > 0) {
            distance = block.y - y < 0 ? distance : -distance;
            for (let i = 0; i < Math.abs(block.y - y); i++) {
                newBlock = await handleDrop(newBlock, x, newBlock.y + distance);
                if (!newBlock) return;
            }
        }
    }

    const handleDrop = async (block, dropX, dropY) => {
        let x = dropX;
        let y = dropY;
        let newBlock;

        const isDoubleHeight = block.height === rectTypes.gameDouble;
        const isDoubleWidth = block.width === rectTypes.gameDouble;

        await setEmptyCells((prevCells) => {
            const {x: emptyX, y: emptyY} = block;

            if (emptyX !== x && emptyY !== y) return prevCells;
            const { changedEmptyCells, hasChanged } = getChangedEmptyBlocks({isDoubleWidth, isDoubleHeight, prevCells, emptyY, emptyX, x, y});
            
            if (hasChanged) {
                if (changedEmptyCells.find(({x, y}) => x === winCol - 1 && y === winRow)) {
                    freeExit.current = true;
                } else {
                    freeExit.current = false;
                }

                setShownBlocks((prevBlocks) => {
                    const changedBlocks = [...prevBlocks];
                    const shownBlock = prevBlocks.find(prevBlock => prevBlock.id === block.id);
                    const id = prevBlocks.indexOf(shownBlock);
                    changedBlocks[id] = {...block, x, y};
                    
                    return changedBlocks;
                });
                newBlock = {...block, x, y};
            }

            return changedEmptyCells;
        });

        return newBlock;
    };

    const handleSkip = () => {
        setIsTimer(false);
        setIsSkip(true);
    }

    const handleContinue = () => {
        setIsTimer(true);
        setIsSkip(false);
    }

    const HTML5toTouch = {
        backends: [
            {
                id: 'html5',
                backend: HTML5Backend,
                transition: MouseTransition,
            },
            {
                id: 'touch',
                backend: TouchBackend,
                preview: true,
                transition: TouchTransition,
            },
        ],
    };

    return (
        <>
            <DndProvider options={HTML5toTouch}>
                <Wrapper $isBlurred={isSkip || finishModal.shown || isBlurred}>
                    <GameHeader 
                        title="Выведи фигуру" 
                        size={40} 
                        onSkip={handleSkip} 
                        align="baseline" 
                        isHiddenButtons={isDemo}
                    />
                    {!isDemo && <TimerStyled reverse size={35} $ratio={ratio} isStart={isTimer} shownTime onStop={handleGetPoints}/>}
                    <Board
                        innerRef={$boardRef}
                        blocks={shownBlocks}
                        onDrop={handleDropBlock}
                    />
                    {!isDemo && (
                        <>
                            <ButtonStyled onClick={handleRestart} $ratio={ratio}>
                                <svg viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.934 12.56L20.8274 12.4515L19.934 12.56ZM1.42077 10.8415L11.4443 8.09771L4.05638 0.788927L1.42077 10.8415ZM20.8274 12.4515C20.4994 9.75053 19.3345 7.51854 17.4893 5.96629C15.6484 4.41758 13.1958 3.6 10.3807 3.6L10.3807 5.4C12.8465 5.4 14.8669 6.11242 16.3306 7.34371C17.79 8.57146 18.7613 10.3695 19.0405 12.6685L20.8274 12.4515ZM10.3807 3.6C9.12631 3.6 7.92173 3.82526 6.80516 4.23881L7.43033 5.92676C8.3502 5.58606 9.34328 5.4 10.3807 5.4L10.3807 3.6ZM0.0426571 14.7439C0.0426573 20.612 4.70967 25.4 10.5046 25.4L10.5046 23.6C5.73772 23.6 1.84266 19.6521 1.84266 14.7439L0.0426571 14.7439ZM10.5046 25.4C12.7411 25.4 15.6065 24.6056 17.7841 22.5611C20 20.4806 21.404 17.1987 20.8274 12.4515L19.0405 12.6685C19.5571 16.9212 18.2981 19.6094 16.552 21.2488C14.7675 22.9243 12.3717 23.6 10.5046 23.6L10.5046 25.4Z" fill="white"/>
                                </svg>
                            </ButtonStyled>
                            <Description $ratio={ratio}> 
                                <b>Как играть:</b> {'\n'}
                                Перемещай синие фигуры, чтобы вывести фиолетовый блок за рамки поля
                            </Description>
                            <OutBoard type={'horizontal'} side={'top'} boardRef={$boardRef} onDrop={handleDropBlock}/>
                            <OutBoard type={'horizontal'} side={'bottom'} boardRef={$boardRef} rowsAmount={rowsAmount} onDrop={handleDropBlock}/>
                            <OutBoard type={'vertical'} side={'left'} onDrop={handleDropBlock} boardRef={$boardRef}/>
                            <OutBoard type={'vertical'} side={'right'} onDrop={handleDropBlock} boardRef={$boardRef}/>
                        </>
                    )}
                </Wrapper>
            </DndProvider>
            {isSkip && <SkipModal onContinue={handleContinue} opened={isSkip} onSkip={() => next()}/>}
            {finishModal.shown && <EndGameModal points={finishModal.points} opened onNext={() => next()}/>}
        </> 
    );
};