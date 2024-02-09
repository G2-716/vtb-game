import {useProgress} from "../../contexts/ProgressContext";

export function Test5() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Test5</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}