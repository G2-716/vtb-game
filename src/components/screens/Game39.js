import {useProgress} from "../../contexts/ProgressContext";

export function Game39() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game39</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}