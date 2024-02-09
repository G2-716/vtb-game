import {useProgress} from "../../contexts/ProgressContext";

export function Game59() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game59</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}