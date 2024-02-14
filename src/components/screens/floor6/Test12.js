import styled from "@emotion/styled";
import {useProgress} from "../../../contexts/ProgressContext";

export function Test12() {
    const {next} = useProgress()

    return (
        <div>
            <h1>Test12</h1>
            <button onClick={() => next()}>next</button>
        </div>
    )
}