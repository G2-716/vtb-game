import {useProgress} from "../../contexts/ProgressContext";

export function Test2() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Test2</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}