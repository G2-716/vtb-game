import {useProgress} from "../../contexts/ProgressContext";

export function Final2() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Final2</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}