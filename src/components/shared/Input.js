import {useCallback} from "react";
import styled from "@emotion/styled";
import {useSizeRatio} from "../../contexts/SizeRatioContext";

const Wrapper = styled.label`
    position: relative;
    display: inline-flex;
    align-items: flex-end;
`

const Label = styled.span`
    flex-shrink: 0;
    font-family: 'ComicSansMS', 'VTB Group', sans-serif;
    font-size: ${({sizeRatio}) => `calc(16px * ${sizeRatio})`};
    color: ${({error}) => error ? '#E31C1C' : '#000000'};
    transition: color 200ms;
`

const Field = styled.input`
    width: 100%;
    margin-left: ${({sizeRatio}) => `calc(10px * ${sizeRatio})`};
    padding: 0;
    border: 0;
    border-bottom: ${({sizeRatio}) => `calc(2px * ${sizeRatio})`} solid ${({error}) => error ? '#E31C1C' : '#000000'};
    outline: none;
    background-color: #FFFFFF;
    color: ${({error}) => error ? '#E31C1C' : '#000000'};
    font-family: 'ComicSansMS', 'VTB Group', sans-serif;
    font-size: ${({sizeRatio}) => `calc(16px * ${sizeRatio})`};
    font-weight: 600;
    transition: border 200ms, color 200ms;
`

export function Input(props) {
    const {className, label, error, value, onChange} = props
    const sizeRatio = useSizeRatio()

    const handleChange = useCallback((event) => {
        onChange?.(event.target.value)
    }, [onChange])

    return (
        <Wrapper sizeRatio={sizeRatio} className={className}>
            <Label sizeRatio={sizeRatio} error={error}>{label}</Label>
            <Field sizeRatio={sizeRatio} error={error} value={value} type="text" onChange={handleChange} />
        </Wrapper>
    )
}
