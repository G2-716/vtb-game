import {useProgress} from "../../contexts/ProgressContext";

export function Lift2() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Lift2</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}