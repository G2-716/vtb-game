import {useProgress} from "../../contexts/ProgressContext";

export function Test9() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Test9</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}