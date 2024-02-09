import {useProgress} from "../../contexts/ProgressContext";

export function Game110() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game110</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}