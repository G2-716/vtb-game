import {useState} from "react";
import styled from "@emotion/styled";
import pic from '../../assets/images/start3.png';
import phone_mockup from '../../assets/images/phone_mockup.png';
import {useProgress} from "../../contexts/ProgressContext";
import {useSizeRatio} from "../../contexts/SizeRatioContext";
import {Button} from "../shared/Button";
import {Checkbox} from "../shared/Checkbox";
import {Input} from "../shared/Input";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: url(${({ background }) => background}) no-repeat 0 0 / cover;
    padding: ${({ sizeRatio }) => `calc(36px * ${sizeRatio}) calc(10px * ${sizeRatio}) calc(40px * ${sizeRatio})`};
`;

const PhoneWrapper = styled.div`
    position: relative;
    width: ${({ sizeRatio }) => `calc(354px * ${sizeRatio})`};
    height: ${({ sizeRatio }) => `calc(601px * ${sizeRatio})`};
    padding: ${({ sizeRatio }) => `calc(142px * ${sizeRatio}) calc(52px * ${sizeRatio}) calc(70px * ${sizeRatio})`};
`

const Phone = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

const Form = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    z-index: 2;
`

const InputStyled = styled(Input)`
    width: 100%;
    
    & + & {
        margin-top: ${({ sizeRatio }) => `calc(36px * ${sizeRatio})`};
    }
`

const CheckboxStyled = styled(Checkbox)`
    width: 100%;
    margin-top: ${({ sizeRatio }) => `calc(40px * ${sizeRatio})`};
`

const CheckboxLink = styled.a`
    color: inherit;
    text-decoration: underline;
`

const ButtonStyled = styled(Button)`
    margin-top: auto;
    font-size: ${({ sizeRatio }) => `calc(15px * ${sizeRatio})`};
`

export function Intro3() {
    const {next, setUser} = useProgress()
    const sizeRatio = useSizeRatio()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAgreed, setIsAgreed] = useState(false)
    const [nameError, setNameError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [isAgreedError, setIsAgreedError] = useState(null)

    function handleNameChange(name) {
        setName(name)
        setNameError(null)
    }

    function handleEmailChange(email) {
        setEmail(email)
        setEmailError(null)
    }

    function handleIsAgreedChange(isAgreed) {
        setIsAgreed(isAgreed)
        setIsAgreedError(null)
    }

    function validate() {
        let result = true

        if (!isAgreed) {
            result = false
            setIsAgreedError('Заполните поле')
        }

        if (!name) {
            result = false
            setNameError('Заполните поле')
        }

        if (!email) {
            result = false
            setEmailError('Заполните поле')
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            result = false
            setEmailError('Неверный формат')
        }

        return result
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (validate()) {
            setUser(name, email)
            next()
        }
    }

    return (
        <Wrapper sizeRatio={sizeRatio} background={pic}>
            <PhoneWrapper sizeRatio={sizeRatio}>
                <Phone src={phone_mockup} />
                <Form onSubmit={handleSubmit}>
                    <InputStyled sizeRatio={sizeRatio} label="Имя" error={nameError} value={name} onChange={handleNameChange} />
                    <InputStyled sizeRatio={sizeRatio} label="E-mail" error={emailError} value={email} onChange={handleEmailChange} />
                    <CheckboxStyled sizeRatio={sizeRatio} error={isAgreedError} value={isAgreed} onChange={handleIsAgreedChange}>
                        Я согласен с <CheckboxLink href="https://fut.ru/personal_data_policy/" target="_blank">Политикой обработки персональных данных</CheckboxLink>
                    </CheckboxStyled>
                    <ButtonStyled sizeRatio={sizeRatio} buttonType="submit">
                        Получить пропуск
                    </ButtonStyled>
                </Form>
            </PhoneWrapper>
        </Wrapper>
    )
}