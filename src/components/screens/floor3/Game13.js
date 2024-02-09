import {useProgress} from "../../../contexts/ProgressContext";

export function Game13() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game13</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}