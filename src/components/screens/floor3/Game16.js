import {useProgress} from "../../../contexts/ProgressContext";

export function Game16() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game16</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}