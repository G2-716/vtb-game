import {useProgress} from "../../contexts/ProgressContext";

export function Lift3() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Lift3</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}