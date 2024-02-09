import {useProgress} from "../../../contexts/ProgressContext";

export function Internship3() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Internship3</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}