import {useProgress} from "../../contexts/ProgressContext";

export function Game28() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game28</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}