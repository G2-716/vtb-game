import {useCallback} from "react";
import styled from "@emotion/styled/macro";
import {useSizeRatio} from "../../contexts/SizeRatioContext";

const Wrapper = styled.label`
    position: relative;
    font-family: 'ComicSansMS', 'VTB Group', sans-serif;
    font-size: ${({sizeRatio}) => `calc(10px * ${sizeRatio})`};
    padding-left: ${({sizeRatio}) => `calc(40px * ${sizeRatio})`};
    color: ${({error}) => error ? '#E31C1C' : '#000000'};
    cursor: pointer;
    user-select: none;
    transition: color 200ms;
`

const Mark = styled.span`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: ${({sizeRatio}) => `calc(30px * ${sizeRatio})`};
    height: ${({sizeRatio}) => `calc(30px * ${sizeRatio})`};
    border-radius: ${({sizeRatio}) => `calc(5px * ${sizeRatio})`};
    border: ${({sizeRatio}) => `calc(2px * ${sizeRatio})`} solid ${({error}) => error ? '#E31C1C' : '#333333'};
    background-color: #FFFFFF;
    transition: background-color 200ms, border 200ms;
`

const Check = styled.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.6);
    width: ${({sizeRatio}) => `calc(17px * ${sizeRatio})`};
    height: ${({sizeRatio}) => `calc(16px * ${sizeRatio})`};
    opacity: 0;
    transition: opacity 200ms, transform 200ms;
`

const Input = styled.input`
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    cursor: pointer;

    &:checked {
        & ~ ${Mark} {
            background-color: ${({error}) => error ? '#E31C1C' : '#333333'};

            ${Check} {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }
`

export function Checkbox(props) {
    const {className, value, error, children, onChange} = props
    const sizeRatio = useSizeRatio()

    const handleChange = useCallback((event) => {
        onChange?.(event.target.checked)
    }, [onChange])

    return (
        <Wrapper sizeRatio={sizeRatio} className={className} error={error}>{children}
            <Input type="checkbox" error={error} checked={value} onChange={handleChange} />
            <Mark sizeRatio={sizeRatio} error={error}>
                <Check sizeRatio={sizeRatio} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8.5L7.08108 14.5L16 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </Check>
            </Mark>
        </Wrapper>
    )
}
