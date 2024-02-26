import {useCallback, useEffect, useMemo, useState} from "react";
import styled from "@emotion/styled";
import {useProgress} from "../../../../contexts/ProgressContext";
import {useGame} from "./useGame";
import {GameBoard} from "./GameBoard";
import {GameController} from "./GameController";
import {ACTIONS} from "./constants";
import {GameHeader} from "../../../shared/GameHeader";
import {Timer} from "../../../shared/Timer";
import {Text} from "../../../shared/Text";
import {useSizeRatio} from "../../../../contexts/SizeRatioContext";
import {SkipModal} from "../../../shared/SkipModal";
import {EndGameModal} from "../../../shared/EndGameModal";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    ${({isBlurred}) => isBlurred ? 'filter: blur(1.5px)' : ''};
`

const WrapperInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${({sizeRatio}) => `calc(26px * ${sizeRatio})`};
    padding: ${({sizeRatio}) => `0 calc(16px * ${sizeRatio}) calc(50px * ${sizeRatio})`};
`

const Description = styled(Text)`
    margin-top: ${({sizeRatio}) => `calc(58px * ${sizeRatio})`};
`

export function Game2048({isRules}) {
    const {next, addPoints2048} = useProgress()
    const sizeRatio = useSizeRatio()
    const [isSkipping, setIsSkipping] = useState(false);
    const [endModal, setEndModal] = useState({shown: false, points: 0});
    const isGameActive = useMemo(
        () => !(isRules || isSkipping || endModal.shown),
        [isRules, isSkipping, endModal.shown],
    );
    const {startGame, hasTileValue, getTiles, moveTiles} = useGame(handleResult, handleResult);

    function handleResult() {
        const points = getPoints()
        setEndModal({shown: true, points})
        addPoints2048(points)
    }

    function getPoints() {
        if (hasTileValue(512)) {
            return 3
        }
        if (hasTileValue(256)) {
            return 2
        }
        return 1
    }

    useEffect(() => {
        startGame();
    }, []);

    return (
        <>
            <Wrapper isBlurred={!isGameActive}>
                <GameHeader size={56} align='center' title="2048" onSkip={isRules ? null : () => setIsSkipping(true)} />
                <GameController
                    active={isGameActive}
                    onMoveUp={() => moveTiles(ACTIONS.MOVE_UP)}
                    onMoveDown={() => moveTiles(ACTIONS.MOVE_DOWN)}
                    onMoveLeft={() => moveTiles(ACTIONS.MOVE_LEFT)}
                    onMoveRight={() => moveTiles(ACTIONS.MOVE_RIGHT)}
                >
                    {(ref) => (
                        <WrapperInner ref={ref} sizeRatio={sizeRatio}>
                            <Timer shownTime size={35} isStart={isGameActive} initialTime={60 * 3} onFinish={() => setEndModal({shown: true, points: getPoints()})} />
                            <GameBoard tiles={getTiles()} />
                            {!isRules && (
                                <Description sizeRatio={sizeRatio}>
                                    <b>Как играть:</b> {'\n'}
                                    Проводи пальцем по экрану, чтобы перемещать плитки. Когда две плитки с одинаковыми цифрами соприкасаются, они сливаются в одну!
                                </Description>
                            )}
                        </WrapperInner>
                    )}
                </GameController>
            </Wrapper>
            <SkipModal opened={isSkipping} onContinue={() => setIsSkipping(false)} onSkip={() => next()}/>
            <EndGameModal opened={endModal.shown} points={endModal.points} onNext={() => next()}/>
        </>
    )
}