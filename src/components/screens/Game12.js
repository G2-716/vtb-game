import {useProgress} from "../../contexts/ProgressContext";

export function Game12() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game12</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}