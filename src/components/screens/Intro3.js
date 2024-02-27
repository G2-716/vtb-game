import {useState} from "react";
import {uid} from "uid";
import {SwitchTransition, CSSTransition} from "react-transition-group";
import styled from "@emotion/styled";
import pic from '../../assets/images/start3.png';
import phone_mockup from '../../assets/images/phone_mockup.png';
import {useProgress} from "../../contexts/ProgressContext";
import {useSizeRatio} from "../../contexts/SizeRatioContext";
import {usePrevious} from "../../hooks/usePrevious";
import {Button} from "../shared/Button";
import {Checkbox} from "../shared/Checkbox";
import {Input} from "../shared/Input";
import {Text} from "../shared/Text";
import {colors} from "../../constants/colors";
import { reachMetrikaGoal } from "../../utils/reachMetrikaGoal";

const SWITCH_DURATION = 400;

const SWITCH_NAME = 'switch';

const STEP = {
    LOGIN: 'LOGIN',
    INFO: 'INFO',
}

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
    padding: ${({ sizeRatio }) => `calc(124px * ${sizeRatio}) calc(52px * ${sizeRatio}) calc(70px * ${sizeRatio})`};
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
    
    &.${SWITCH_NAME}-enter {
        opacity: 0;
    }

    &.${SWITCH_NAME}-enter-active {
        opacity: 1;
        transition: opacity ${SWITCH_DURATION}ms;
    }

    &.${SWITCH_NAME}-exit {
        opacity: 1;
    }

    &.${SWITCH_NAME}-exit-active {
        opacity: 0;
        transition: opacity ${SWITCH_DURATION}ms;
    }
`

const FormFields = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${({ sizeRatio }) => `calc(79px * ${sizeRatio})`};
`

const FormError = styled.span`
    position: absolute;
    top: 0;
    text-align: center;
    font-size: ${({ sizeRatio }) => `calc(15px * ${sizeRatio})`};
    color: #E31C1C;
    transform: ${({visible}) => visible ? 'translateY(0)' : 'translateY(-20%)'};
    opacity: ${({visible}) => visible ? '1' : '0'};
    transition: transform 200ms, opacity 200ms;
`

const FormInput = styled(Input)`
    width: 100%;
    
    & + & {
        margin-top: ${({ sizeRatio }) => `calc(36px * ${sizeRatio})`};
    }
`

const FormCheckbox = styled(Checkbox)`
    width: 100%;
    margin-top: ${({ sizeRatio }) => `calc(40px * ${sizeRatio})`};

    & span {
        top: 0;
        transform: none;
    }
`

const FormCheckboxLink = styled.a`
    color: inherit;
    text-decoration: underline;
`

const FormButton = styled(Button)`
    margin-top: ${({ sizeRatio }) => `calc(109px * ${sizeRatio})`};
    font-size: ${({ sizeRatio }) => `calc(15px * ${sizeRatio})`};
`

const Info = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    z-index: 2;
    
    &.${SWITCH_NAME}-enter {
        opacity: 0;
    }

    &.${SWITCH_NAME}-enter-active {
        opacity: 1;
        transition: opacity ${SWITCH_DURATION}ms;
    }

    &.${SWITCH_NAME}-exit {
        opacity: 1;
    }

    &.${SWITCH_NAME}-exit-active {
        opacity: 0;
        transition: opacity ${SWITCH_DURATION}ms;
    }
`

const InfoTitle = styled(Text)`
    text-align: center;
`

const InfoId = styled(Text)`
    margin-top: ${({ sizeRatio }) => `calc(4px * ${sizeRatio})`};
    font-size: ${({ sizeRatio }) => `calc(48px * ${sizeRatio})`};
    line-height: ${({ sizeRatio }) => `calc(57.6px * ${sizeRatio})`};
    text-align: center;
    color: ${colors.purple};
    font-weight: 700;
`

const InfoDescription = styled(Text)`
    text-align: center;
    margin-top: ${({ sizeRatio }) => `calc(9px * ${sizeRatio})`};
`

const InfoButton = styled(Button)`
    margin-top: ${({ sizeRatio }) => `calc(61px * ${sizeRatio})`};
    font-size: ${({ sizeRatio }) => `calc(16px * ${sizeRatio})`};
`

export function Intro3() {
    const {next, setUser, leaderboard, isLeaderboardLoading} = useProgress()
    const sizeRatio = useSizeRatio()
    const [step, setStep] = useState(STEP.LOGIN)
    const [id] = useState(() => uid(7))
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAgreed, setIsAgreed] = useState(false)
    const [nameError, setNameError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [isAgreedError, setIsAgreedError] = useState(null)
    const error = nameError || emailError || isAgreedError
    const previousError = usePrevious(error)

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
            setIsAgreedError('Поля обязательны для заполнения')
        }

        if (!name) {
            result = false
            setNameError('Поля обязательны для заполнения')
        }

        if (!email) {
            result = false
            setEmailError('Поля обязательны для заполнения')
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            result = false
            setEmailError('Почта указана в неверном формате')
        } else if (leaderboard && leaderboard.find((data) => data.email === email)) {
            result = false
            setEmailError('Эта почта уже участвует в рейтинге, попробуй другую')
        }

        return result
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (validate()) {
            setUser(id, name, email)
            setStep(STEP.INFO)
            reachMetrikaGoal('fill')
        }
    }

    function handleContinue() {
        next()
    }

    function renderContent() {
        if (step === STEP.LOGIN) {
            return (
                <Form onSubmit={handleSubmit}>
                    <FormError sizeRatio={sizeRatio} visible={!!error}>{error ?? previousError}</FormError>
                    <FormFields sizeRatio={sizeRatio}>
                        <FormInput sizeRatio={sizeRatio} label="Имя" error={!!nameError} value={name} onChange={handleNameChange} />
                        <FormInput sizeRatio={sizeRatio} label="E-mail" error={!!emailError} value={email} onChange={handleEmailChange} />
                        <FormCheckbox sizeRatio={sizeRatio} error={!!isAgreedError} value={isAgreed} onChange={handleIsAgreedChange}>
                            Я согласен(а) на <FormCheckboxLink href="https://fut.ru/personal_data_policy/" target="_blank">обработку персональных данных</FormCheckboxLink>{' '}
                            и получение информационных сообщений, а также с <FormCheckboxLink href="/" target="_blank">правилами проведения акции</FormCheckboxLink>.
                        </FormCheckbox>
                    </FormFields>
                    <FormButton sizeRatio={sizeRatio} buttonType="submit" loading={isLeaderboardLoading}>
                        Получить пропуск
                    </FormButton>
                </Form>
            )
        }

        if (step === STEP.INFO) {
            return (
                <Info sizeRatio={sizeRatio}>
                    <InfoTitle sizeRatio={sizeRatio}>Твой ID</InfoTitle>
                    <InfoId sizeRatio={sizeRatio}>{id}</InfoId>
                    <InfoDescription sizeRatio={sizeRatio}>
                        Он нужен, чтобы отслеживать твою позицию в рейтинге.
                        {'\n'}
                        <b>Сделай скриншот</b>, чтобы не потерять его.
                    </InfoDescription>
                    <InfoDescription sizeRatio={sizeRatio}>
                        Обрати внимание, <b>твои баллы сохранятся только после завершения игры</b>.
                        {'\n'}
                        Если ты закроешь окно с игрой до её завершения, данные не будут записаны.
                    </InfoDescription>
                    <InfoButton sizeRatio={sizeRatio} onClick={handleContinue}>
                        Продолжить
                    </InfoButton>
                </Info>
            )
        }

        return null
    }

    return (
        <Wrapper sizeRatio={sizeRatio} background={pic}>
            <PhoneWrapper sizeRatio={sizeRatio}>
                <Phone src={phone_mockup} />
                <SwitchTransition mode='out-in'>
                    <CSSTransition key={step} timeout={SWITCH_DURATION} classNames={SWITCH_NAME}>
                        {renderContent()}
                    </CSSTransition>
                </SwitchTransition>
            </PhoneWrapper>
        </Wrapper>
    )
}