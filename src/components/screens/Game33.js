import {useProgress} from "../../contexts/ProgressContext";

export function Game33() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game33</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}