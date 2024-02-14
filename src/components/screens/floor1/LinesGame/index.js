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
    margin-top: ${({sizeRatio}) => `calc(73px * ${sizeRatio})`};
    padding: ${({sizeRatio}) => `0 calc(18px * ${sizeRatio}) calc(50px * ${sizeRatio})`};
`

const Description = styled(Text)`
    margin-top: ${({sizeRatio}) => `calc(58px * ${sizeRatio})`};
`

export function LinesGame({isRules}) {
    const {next} = useProgress()
    const sizeRatio = useSizeRatio()
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
        if (!isRules) {
            startGame();
        }
    }, [isRules]);

    return (
        <>
            <Wrapper isBlurred={!isGameActive}>
                <GameHeader size={40} align='baseline' title={'Соедини\nточки'} onSkip={isRules ? null : () => setIsSkipping(true)} />
                <WrapperInner sizeRatio={sizeRatio}>
                    <GameController
                        active={isGameActive}
                        onMoveUp={() => moveTiles(ACTIONS.MOVE_UP)}
                        onMoveDown={() => moveTiles(ACTIONS.MOVE_DOWN)}
                        onMoveLeft={() => moveTiles(ACTIONS.MOVE_LEFT)}
                        onMoveRight={() => moveTiles(ACTIONS.MOVE_RIGHT)}
                    >
                        <GameBoard tiles={getTiles()} />
                    </GameController>
                    {!isRules && (
                        <Description sizeRatio={sizeRatio}>
                            <b>Как играть:</b> {'\n'}
                            Соедини все одинаковые точки так, чтобы линии не пересекались
                        </Description>
                    )}
                </WrapperInner>
            </Wrapper>
            {isSkipping && (<SkipModal onContinue={() => setIsSkipping(false)} onSkip={() => next()}/>)}
            {endModal.shown && <EndGameModal points={endModal.points} onNext={() => next()}/>}
        </>
    )
}