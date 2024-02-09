import {useProgress} from "../../contexts/ProgressContext";

export function Lift1() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Lift1</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}