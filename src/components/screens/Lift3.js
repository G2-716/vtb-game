import styled from "@emotion/styled";
import {useProgress} from "../../contexts/ProgressContext";
import background from "../../assets/images/bg_elevatorMenu.svg";
import { SCREENS } from "../../constants/screens";
import { FLOORS } from "../../constants/floors";
import { useState } from "react";
import { Modal } from "../shared/Modal";
import { Text } from "../shared/Text";
import { Button, BUTTON_SIZE, BUTTON_TYPES } from "../shared/Button";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${background}) no-repeat center 0 / cover;
    padding: 72px 30px;

    ${({$isBlurred}) => $isBlurred ? 'filter: blur(1.5px)' : ''};
`;

const ExitBtn = styled.div`
    position: absolute;
    top: 24px;
    right: 24px;
    width: 32px;
    height: 26px;
    cursor: pointer;
`;

const Floor = styled.div`
    display: flex;
    padding: 4px 10px;
    cursor: pointer;
    background: ${({$active, background}) => $active ? '#DBDBDB' : background};
    border-radius: 10px;
    align-items: center;
    transition: background .2s;
    box-shadow: 2px 2px 0 0 #D1D1D1 ${({$active}) => $active ? ', inset 0 0 0 2px #f5f5f5' : ''};
    margin-top: 13px;
    white-space: pre-line;
`;

const Icon = styled.div`
    background: url(${({background}) => background}) center center no-repeat;
    background-size: contain;
`;

const FloorLogoIcon = styled(Icon)`
    margin-right: 8.9%;
    height: 59px;
    width: 59px;
`;

const FloorCircleIcon = styled(Icon)`
    height: 44px;
    width: 44px;
    margin-left: auto;
`;

const FloorTitle = styled.p`
    font-size: 14px;
    font-family: 'ComicSansMS', 'VTBGroup', sans-serif;
    width: 45%;
    margin: 0 auto;
    text-align: left;
`;

const ButtonsWrapper = styled.div`
    margin-top: 40px;

    & button + button {
        margin-top: 10px;
    } 
`;

export function Lift3() {
    const {next} = useProgress();
    const [chosen, setChosen] = useState(null);
    const [isModal, setIsModal] = useState(false);

    const handleMove = (id, screen) => {
        setChosen(id);
        setTimeout(() => next(screen), 400);
    };

    return (
        <>
            <Wrapper $isBlurred={isModal}>
                <ExitBtn onClick={() => setIsModal(true)}>
                    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 0C1.34315 0 0 1.34315 0 3V23C0 24.6569 1.34315 26 3 26H15C16.6569 26 18 24.6569 18 23V19H16V23C16 23.5523 15.5523 24 15 24H3C2.44772 24 2 23.5523 2 23V3C2 2.44772 2.44772 2 3 2H15C15.5523 2 16 2.44772 16 3V7.26087H18V3C18 1.34315 16.6569 0 15 0H3Z" fill="black"/>
                        <path d="M32 13L22 7.2265V12H10V14H22V18.7735L32 13Z" fill="black"/>
                    </svg>
                </ExitBtn>
                {FLOORS.map(floor => (
                    <Floor 
                        key={floor.id}
                        onClick={() => handleMove(floor.id, floor.screen)} 
                        $active={floor.id === chosen}
                        background={floor.background ?? 'white'}
                    >
                        <FloorLogoIcon background={floor.logo}/>
                        <FloorTitle>{floor.name}</FloorTitle>
                        <FloorCircleIcon background={floor.circle}/>
                    </Floor>
                ))}
            </Wrapper>
            {isModal && (
                <Modal>
                    <Text>
                        Уверен, что хочешь завершить игру? В рейтинг пойдут только те баллы, которые ты успел заработать до этого момента
                    </Text>
                    <ButtonsWrapper>
                        <Button size={BUTTON_SIZE.sm} onClick={() => setIsModal(false)}>
                            Нет, продолжить игру
                        </Button>
                        <Button 
                            size={BUTTON_SIZE.sm} 
                            onClick={() => next(SCREENS.FINAL_1)}
                            type={BUTTON_TYPES.outlined}
                        >
                            Да, завершить игру
                        </Button>
                    </ButtonsWrapper>
                </Modal>
            )}
        </>
    )
}