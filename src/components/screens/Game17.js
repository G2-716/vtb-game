import {useProgress} from "../../contexts/ProgressContext";

export function Game17() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game17</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}