import {useProgress} from "../../contexts/ProgressContext";

export function Game34() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game34</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}