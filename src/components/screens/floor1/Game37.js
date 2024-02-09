import {useProgress} from "../../../contexts/ProgressContext";

export function Game37() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game37</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}