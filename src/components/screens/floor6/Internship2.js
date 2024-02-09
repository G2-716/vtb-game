import {useProgress} from "../../../contexts/ProgressContext";

export function Internship2() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Internship2</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}