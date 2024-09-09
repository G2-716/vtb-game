import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../../../constants/colors";
import { interns } from "../../../constants/internships";
import { SCREENS } from "../../../constants/screens";
import {useProgress} from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { reachMetrikaGoal } from "../../../utils/reachMetrikaGoal";
import { Button, BUTTON_TYPES } from "../../shared/Button";
import { Modal } from "../../shared/Modal";

const Container = styled.div`
    --ratio: ${({$ratio}) => $ratio};
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #F3F7FA;
    ${({$isBlurred}) => $isBlurred ? 'filter: blur(1.5px)' : ''};
    padding: calc(25px * var(--ratio));
    padding-right: calc(29px * var(--ratio));
`;

const Block = styled.div`
    margin-bottom: calc(30px * var(--ratio));
`;

const InternWrapper = styled.div`
    padding:  calc(10px * var(--ratio)) calc(20px * var(--ratio));
    background: ${({$isActive}) => $isActive ? colors.blue : 'white'};
    color: ${({$isActive}) => $isActive ? 'white' : 'black'};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    margin-top: 5px;
    border-radius: 5px;
    font-size: calc(16px * var(--ratio));

    transition: background .3s, color .3s;
    cursor: pointer;
`;

const Title = styled.h4`
    font-size: calc(18px * var(--ratio));
    margin-bottom: calc(15px * var(--ratio));
    white-space: pre-line;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 calc(16px * var(--ratio)) 0 calc(25px * var(--ratio));
    position: absolute;
    left: 0;
    right: 0;
    bottom: calc(40px * var(--ratio));
`;

const ModalTitle = styled.h4`
    font-size: calc(15px * var(--ratio));
    margin-bottom: calc(20px * var(--ratio));
`;

const ModalTextBlock = styled.div`
    margin-bottom: calc(10px * var(--ratio));
    white-space: pre-line;
    text-align: start;
`;

const ModalValues = styled.span`
    font-weight: 700;
    font-size: calc(15px * var(--ratio));
    color: ${colors.blue};
`;

const ModalText = styled.span`
    font-size: calc(12px * var(--ratio));
`;

const LiStyled = styled.li`
    margin-left: calc(20px * var(--ratio));

    &::marker {
        color: ${colors.blue};
    }
`;

const ButtonStyled = styled(Button)`
    margin: calc(30px * var(--ratio)) auto 0;
`;

export function Internship3() {
    const [info, setInfo] = useState({});
    const [active, setActive] = useState();
    const [isModal, setIsModal] = useState(false);
    const ratio = useSizeRatio();
    const {next} = useProgress()

    const handleClick = (intern) => {
        setInfo({...intern});
        setActive(intern.id);
        setTimeout(() => {
            setIsModal(true);
            setActive('');
        }, 400);
    };

    const handleToTest = () => {
        reachMetrikaGoal('test2')
        next(SCREENS.TEST_1)
    }

    return (
        <Container $ratio={ratio}>
            <Wrapper $isBlurred={isModal}>
                <Title>
                    Стажировки ВТБ
                </Title>
                <Block>
                    {interns.map((intern) => (
                        <InternWrapper key={intern.id} onClick={() => handleClick(intern)} $isActive={intern?.id === active}>
                            {intern.name}
                        </InternWrapper>
                    ))}
                </Block>
                <ButtonsWrapper>
                    <Button onClick={handleToTest}>К тесту</Button>
                    <Button type={BUTTON_TYPES.outlined} onClick={() => next(SCREENS.LIFT_3)}>В лифт</Button>
                </ButtonsWrapper>
            </Wrapper>
            <Modal opened={isModal}>
                <ModalTitle>{info.name}</ModalTitle>
                {info.applying && (
                    <ModalTextBlock>
                        <ModalText>Срок приёма заявок:{'\n'}</ModalText>
                        <ModalValues>{info.applying}</ModalValues>
                    </ModalTextBlock>
                )}
                {info.start && (
                    <ModalTextBlock>
                        <ModalText>Старт программы:{'\n'}</ModalText>
                        <ModalValues>{info.start}</ModalValues>
                    </ModalTextBlock>
                )}
                {info.duration && (
                    <ModalTextBlock >
                        <ModalText>Продолжительность:{'\n'}</ModalText>
                        <ModalValues>{info.duration}</ModalValues>
                    </ModalTextBlock>
                )}
                {info.placement && (
                    <ModalTextBlock>
                        <ModalText>География: </ModalText>
                        <ModalValues>{info.placement}</ModalValues>
                    </ModalTextBlock>
                )}
                {info.type && (
                    <ModalTextBlock>
                        <ModalText>Тип: </ModalText>
                        <ModalValues>{info.type}</ModalValues>
                    </ModalTextBlock>
                )}
                {info.direction && (
                    <ModalTextBlock>
                        <ModalText>Направление школы: </ModalText>
                        <ModalValues>{info.direction}</ModalValues>
                    </ModalTextBlock>
                )}
                {info.directions && (
                    <ModalTextBlock>
                        <ModalText>Направления программы: </ModalText>
                        <ul>
                            {info.directions.map((direction) => (
                                <LiStyled><ModalValues>{direction}</ModalValues></LiStyled>
                            ))}
                        </ul>
                    </ModalTextBlock>
                )}
                <ButtonStyled background={colors.blue} onClick={() => setIsModal(false)}>Продолжить</ButtonStyled>
            </Modal>
        </Container>
    )
}