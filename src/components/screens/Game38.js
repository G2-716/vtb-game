import {useProgress} from "../../contexts/ProgressContext";

export function Game38() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game38</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}