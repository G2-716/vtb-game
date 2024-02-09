import {useProgress} from "../../../contexts/ProgressContext";

export function Game14() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game14</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}