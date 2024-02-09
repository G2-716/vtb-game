import {useProgress} from "../../../contexts/ProgressContext";

export function Game56() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game56</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}