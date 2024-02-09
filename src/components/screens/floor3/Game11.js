import {useProgress} from "../../../contexts/ProgressContext";

export function Game11() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Game11</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}