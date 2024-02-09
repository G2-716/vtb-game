import {useProgress} from "../../../contexts/ProgressContext";

export function Game29() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game29</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}