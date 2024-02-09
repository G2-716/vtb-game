import {useProgress} from "../../../contexts/ProgressContext";

export function Game35() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game35</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}