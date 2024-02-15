import {useMemo, useState} from "react";
import styled from "@emotion/styled";
import {useProgress} from "../../../../contexts/ProgressContext";
import {useGame} from "./useGame";
import {GameBoard} from "./GameBoard";
import {GameController} from "./GameController";
import {GameHeader} from "../../../shared/GameHeader";
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
    margin-top: ${({sizeRatio}) => `calc(78px * ${sizeRatio})`};
`

export function PointsGame({isRules}) {
    const {next, addLinesPoints} = useProgress()
    const sizeRatio = useSizeRatio()
    const [isSkipping, setIsSkipping] = useState(false);
    const [endModal, setEndModal] = useState({shown: false, points: 0});
    const isGameActive = useMemo(
        () => !(isRules || isSkipping || endModal.shown),
        [isRules, isSkipping, endModal.shown],
    );
    const {board, paths, attempts, onDragEnd, onDragMove, onDragStart} = useGame(handleResult);

    function handleResult() {
        const points = getPoints()
        setEndModal({shown: true, points})
        addLinesPoints(points)
    }

    function getPoints() {
        if (attempts === 1) {
            return 3
        }

        if (attempts === 2) {
            return 2
        }

        if (attempts === 3) {
            return 1
        }

        return 0
    }

    return (
        <>
            <Wrapper isBlurred={!isGameActive}>
                <GameHeader size={40} align='baseline' title={'Соедини\nточки'} onSkip={isRules ? null : () => setIsSkipping(true)} />
                    <GameController
                        active={isGameActive}
                        onDragStart={onDragStart}
                        onDragMove={onDragMove}
                        onDragEnd={onDragEnd}
                    >
                        {(ref) => (
                            <WrapperInner ref={ref} sizeRatio={sizeRatio}>
                                <GameBoard board={board} paths={paths} />
                                {!isRules && (
                                    <Description sizeRatio={sizeRatio}>
                                        <b>Как играть:</b> {'\n'}
                                        Соедини все одинаковые точки так, чтобы линии не пересекались
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