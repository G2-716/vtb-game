import {useProgress} from "../../contexts/ProgressContext";

export function Game43() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game43</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}