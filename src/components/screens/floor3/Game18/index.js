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

export function Game18() {
    const {next} = useProgress()
    const sizeRatio = useSizeRatio()
    const [isRules, setIsRules] = useState(false);
    const [isSkipping, setIsSkipping] = useState(false);
    const [endModal, setEndModal] = useState({shown: false, points: 0});
    const isGameActive = useMemo(
        () => !(isRules || isSkipping || endModal.shown),
        [isRules, isSkipping, endModal.shown],
    );
    const {startGame, hasTileValue, getTiles, moveTiles} = useGame(
        () => setEndModal({shown: true, points: getPoints()}),
        () => setEndModal({shown: true, points: getPoints()}),
    );

    function getPoints() {
        if (hasTileValue(2048)) {
            return 3
        }
        if (hasTileValue(1024)) {
            return 2
        }
        if (hasTileValue(512)) {
            return 1
        }
        return 0
    }

    useEffect(() => {
        startGame();
    }, []);

    return (
        <>
            <Wrapper isBlurred={!isGameActive}>
                <GameHeader size={56} align='center' title="2048" onSkip={() => setIsSkipping(true)} />
                <WrapperInner sizeRatio={sizeRatio}>
                    <Timer shownTime size={35} isStart={isGameActive} initialTime={60 * 3} onFinish={() => setEndModal({shown: true, points: getPoints()})} />
                    <GameController
                        active={isGameActive}
                        onMoveUp={() => moveTiles(ACTIONS.MOVE_UP)}
                        onMoveDown={() => moveTiles(ACTIONS.MOVE_DOWN)}
                        onMoveLeft={() => moveTiles(ACTIONS.MOVE_LEFT)}
                        onMoveRight={() => moveTiles(ACTIONS.MOVE_RIGHT)}
                    >
                        <GameBoard tiles={getTiles()} />
                    </GameController>
                    <Description sizeRatio={sizeRatio}>
                        <b>Как играть:</b> {'\n'}
                        Проводи пальцем по экрану, чтобы перемещать плитки. Когда две плитки с одинаковыми цифрами соприкасаются, они сливаются в одну!
                    </Description>
                </WrapperInner>
            </Wrapper>
            {isSkipping && (<SkipModal onContinue={() => setIsSkipping(false)} onSkip={() => next()}/>)}
            {endModal.shown && <EndGameModal points={endModal.points} onNext={() => next()}/>}
        </>
    )
}