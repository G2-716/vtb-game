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

export function Game48() {
    const {next} = useProgress()
    const sizeRatio = useSizeRatio()
    const [isRules, setIsRules] = useState(false);
    const [isSkipping, setIsSkipping] = useState(false);
    const [endModal, setEndModal] = useState({shown: false, points: 0});
    const [gameOver, setGameOver] = useState(false)
    const isGameActive = useMemo(
        () => !(isRules || isSkipping || endModal.shown || gameOver),
        [isRules, isSkipping, endModal.shown, gameOver],
    );
    const [gameStats, addLinesCleared] = useGameStats();
    const [player, setPlayer, resetPlayer] = usePlayer();
    const [board, setBoard] = useBoard({
        rows: 15,
        columns: 10,
        player,
        resetPlayer,
        addLinesCleared
    });

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
        if (gameOver) {
            setEndModal({shown: true, points: getPoints()})
        }
    }, [gameOver]);

    return (
        <>
            <Wrapper isBlurred={!isGameActive}>
                <GameHeader size={40} align='baseline' title="Тетрис" onSkip={() => setIsSkipping(true)} />
                <WrapperInner sizeRatio={sizeRatio}>
                    <Timer size={25} initialTime={0} shownTime isStart={isGameActive} reverse />
                    <GameController
                        active={isGameActive}
                        board={board}
                        gameStats={gameStats}
                        player={player}
                        setGameOver={setGameOver}
                        setPlayer={setPlayer}
                    >
                        {({input}) => (
                            <>
                                <BoardStyled sizeRatio={sizeRatio} board={board} />
                                <Actions sizeRatio={sizeRatio} onInput={input} />
                            </>
                        )}
                    </GameController>
                </WrapperInner>
            </Wrapper>
            {isSkipping && (<SkipModal onContinue={() => setIsSkipping(false)} onSkip={() => next()}/>)}
            {endModal.shown && <EndGameModal points={endModal.points} onNext={() => next()}/>}
        </>
    )
}