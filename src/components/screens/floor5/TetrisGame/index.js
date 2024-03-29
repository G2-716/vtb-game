import styled from "@emotion/styled";
import {useProgress} from "../../../../contexts/ProgressContext";
import {useSizeRatio} from "../../../../contexts/SizeRatioContext";
import {Board} from "./components/Board";
import {GameController} from "./components/GameController";
import {useGameStats} from "./hooks/useGameStats";
import {usePlayer} from "./hooks/usePlayer";
import {useBoard} from "./hooks/useBoard";
import {useEffect, useMemo, useState} from "react";
import {GameHeader} from "../../../shared/GameHeader";
import {SkipModal} from "../../../shared/SkipModal";
import {EndGameModal} from "../../../shared/EndGameModal";
import {BoardActions} from "./components/BoardActions";
import {Timer} from "../../../shared/Timer";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    ${({isBlurred}) => isBlurred ? 'filter: blur(1.5px)' : ''};
`

const WrapperInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${({sizeRatio}) => `calc(24px * ${sizeRatio})`};
    padding: ${({sizeRatio}) => `0 calc(58px * ${sizeRatio}) calc(40px * ${sizeRatio})`};
`

const BoardStyled = styled(Board)`
    margin-top: ${({sizeRatio}) => `calc(7px * ${sizeRatio})`};
`

const Actions = styled(BoardActions)`
    margin-top: ${({sizeRatio}) => `calc(16px * ${sizeRatio})`};
`

export function TetrisGame({isRules}) {
    const {next, addTetrisPoints} = useProgress()
    const sizeRatio = useSizeRatio()
    const [isSkipping, setIsSkipping] = useState(false);
    const [endModal, setEndModal] = useState({shown: false, points: 0});
    const isGameActive = useMemo(
        () => !(isRules || isSkipping || endModal.shown),
        [isRules, isSkipping, endModal.shown],
    );
    const [gameStats, addLinesCleared] = useGameStats();
    const [player, setPlayer, resetPlayer] = usePlayer();
    const [board] = useBoard({
        active: isGameActive,
        rows: 15,
        columns: 10,
        player,
        resetPlayer,
        addLinesCleared
    });

    function handleResult() {
        const points = getPoints()
        setEndModal({shown: true, points})
        addTetrisPoints(points)
    }

    function getPoints() {
        if (gameStats.linesCompleted >= 5) {
            return 3
        }
        if (gameStats.linesCompleted >= 3) {
            return 2
        }
        if (gameStats.linesCompleted >= 1) {
            return 1
        }
        return 0
    }

    useEffect(() => {
        if (gameStats.linesCompleted >= 5) {
            handleResult()
        }
    }, [gameStats.linesCompleted]);

    return (
        <>
            <Wrapper isBlurred={!isGameActive}>
                <GameHeader size={40} align='baseline' title="Тетрис" onSkip={isRules ? null : () => setIsSkipping(true)} />
                <GameController
                    active={isGameActive}
                    board={board}
                    gameStats={gameStats}
                    player={player}
                    setGameOver={handleResult}
                    setPlayer={setPlayer}
                >
                    {({input}) => (
                        <WrapperInner sizeRatio={sizeRatio}>
                            <Timer size={25} initialTime={0} shownTime isStart={isGameActive} reverse />
                            <BoardStyled sizeRatio={sizeRatio} board={board} />
                            {!isRules && <Actions sizeRatio={sizeRatio} onInput={input} />}
                        </WrapperInner>
                    )}
                </GameController>
            </Wrapper>
            <SkipModal opened={isSkipping} onContinue={() => setIsSkipping(false)} onSkip={() => next()}/>
            <EndGameModal opened={endModal.shown} points={endModal.points} onNext={() => next()}/>
        </>
    )
}