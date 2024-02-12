import {useEffect, useRef} from "react";
import {useProgress} from "../../../../contexts/ProgressContext";
import {useGame} from "./useGame";
import {GameBoard} from "./GameBoard";
import {GameController} from "./GameController";
import {ACTIONS} from "./constants";

export function Game18() {
    const {next} = useProgress()
    const { getTiles, moveTiles, startGame } = useGame(
        () => console.log('win'),
        () => console.log('lose'),
    );

    useEffect(() => {
        startGame();
    }, []);

    return (
        <GameController
            onMoveUp={() => moveTiles(ACTIONS.MOVE_UP)}
            onMoveDown={() => moveTiles(ACTIONS.MOVE_DOWN)}
            onMoveLeft={() => moveTiles(ACTIONS.MOVE_LEFT)}
            onMoveRight={() => moveTiles(ACTIONS.MOVE_RIGHT)}
        >
            <div>
                <GameBoard tiles={getTiles()} />
                <button onClick={() => next()}>next</button>
            </div>
        </GameController>
    )
}