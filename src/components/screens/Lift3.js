import styled from "@emotion/styled";
import {useProgress} from "../../contexts/ProgressContext";
import background from "../../assets/images/bg_elevatorMenu.svg";
import hint from "../../assets/images/elevator_hint.png";
import visited from "../../assets/images/visitedIcon.svg";
import { SCREENS } from "../../constants/screens";
import { FLOORS } from "../../constants/floors";
import { useEffect, useState } from "react";
import { Modal } from "../shared/Modal";
import { Text } from "../shared/Text";
import { Button, BUTTON_SIZE, BUTTON_TYPES } from "../shared/Button";
import { useSizeRatio } from "../../contexts/SizeRatioContext";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${background}) no-repeat center 0 / cover;
    padding: calc(72px * ${({$ratio}) => $ratio}) calc(30px * ${({$ratio}) => $ratio});

    ${({$isBlurred}) => $isBlurred ? 'filter: blur(1.5px)' : ''};
`;

const ExitBtn = styled.div`
    position: absolute;
    top: calc(24px * ${({$ratio}) => $ratio});
    right: calc(20px * ${({$ratio}) => $ratio});
    width: calc(32px * ${({$ratio}) => $ratio});
    height: calc(26px * ${({$ratio}) => $ratio});
    cursor: pointer;
`;

const Floor = styled.div`
    position: relative;
    display: flex;
    padding:  calc(4px * ${({$ratio}) => $ratio}) calc(10px * ${({$ratio}) => $ratio});
    cursor: pointer;
    background: ${({$active}) => $active ? '#CAE8FF' : '#E8F5FF'};
    border-radius: calc(10px * ${({$ratio}) => $ratio});
    align-items: center;
    transition: background .2s;
    box-shadow: 2px 2px 0 0 #D1D1D1 ${({$active}) => $active ? ', inset 0 0 0 2px #E8F5FF' : ''};
    margin-top: calc(13px * ${({$ratio}) => $ratio});
    white-space: pre-line;
`;

const LastFloor = styled(Floor)`
    background: #ffffff;
    box-shadow: 2px 2px 0 0 #D1D1D1 ${({$active}) => $active ? ', inset 0 0 0 2px #E7B3FF' : ''};
`;

const Icon = styled.div`
    background: url(${({background}) => background}) center center no-repeat;
    background-size: contain;
`;

const FloorLogoIcon = styled(Icon)`
    margin-right: 8.9%;
    height: calc(59px * ${({$ratio}) => $ratio});
    width: calc(59px * ${({$ratio}) => $ratio});
`;

const FloorCircleIcon = styled(Icon)`
    height: calc(44px * ${({$ratio}) => $ratio});
    width: calc(44px * ${({$ratio}) => $ratio});
    margin-left: auto;
`;

const FloorTitle = styled.p`
    font-size: calc(14px * ${({$ratio}) => $ratio});
    font-family: 'ComicSansMS', 'VTB Group', sans-serif;
    width: 45%;
    margin: 0 auto;
    text-align: left;
`;

const VisitedIcon = styled.div`
    position: absolute;
    top: calc(5px * ${({$ratio}) => $ratio});
    right: calc(5px * ${({$ratio}) => $ratio});
    width: calc(10px * ${({$ratio}) => $ratio});
    height: calc(10px * ${({$ratio}) => $ratio});
    background: url(${visited}) no-repeat 0 0 / contain;
`;

const ButtonsWrapper = styled.div`
    margin-top: calc(40px * ${({$ratio}) => $ratio});

    & button + button {
        margin-top: calc(10px * ${({$ratio}) => $ratio});
    } 
`;

const Hint = styled.img`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: calc(293px * ${({$ratio}) => $ratio});
    height: calc(211px * ${({$ratio}) => $ratio});
`;

const ModalHint = styled(Modal)`
    top: calc(16px * ${({$ratio}) => $ratio});
    left: calc(18px * ${({$ratio}) => $ratio});
    padding: calc(12px * ${({$ratio}) => $ratio}) calc(10px * ${({$ratio}) => $ratio});
    transform: none !important; 
    font-size: 12px;
`;

const ModalHintButton = styled.div`
    position: absolute;
    top: calc(15px * ${({$ratio}) => $ratio});
    right: calc(18px * ${({$ratio}) => $ratio});
    border-radius: 50%;
    padding: calc(9px * ${({$ratio}) => $ratio}) calc(2px * ${({$ratio}) => $ratio}) calc(9px * ${({$ratio}) => $ratio}) calc(10px * ${({$ratio}) => $ratio});
    width: calc(44px * ${({$ratio}) => $ratio});
    height: calc(44px * ${({$ratio}) => $ratio});
    z-index: 1000;
    overflow: hidden;

    &::before {
        --left: calc(100% - 38px * ${({$ratio}) => $ratio});
        --top: calc(36px * ${({$ratio}) => $ratio});
        --size: calc(22px * ${({$ratio}) => $ratio});
        content: '';
        position: fixed;
        inset: 0;
        background: url(${background});
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center 0;
        background-size: cover;
        z-index: -1;
        clip-path: circle(var(--size) at var(--left) var(--top));
    }
`;

export function Lift3() {
    const {next, isFirstElevator, visitElevator, visitedFloors} = useProgress();
    const [chosen, setChosen] = useState(null);
    const [isModal, setIsModal] = useState(false);
    const [isHint, setIsHint] = useState(false);
    const [isGirlHint, setIsGirlHint] = useState(false);
    const ratio = useSizeRatio();

    const handleMove = (id, screen) => {
        setChosen(id);
        setTimeout(() => {
            if (isFirstElevator) visitElevator();
            next(screen)
        }, 400);
    };

    useEffect(() => {
        if (!isFirstElevator) return;

        const timeOut = setTimeout(() => {
            setIsHint(true);
        }, 500)

        return () => clearTimeout(timeOut);
    }, []);

    const handleCloseHint = () => {
        setIsHint(false);
        setIsGirlHint(true);
    }

    return (
        <>
            <Wrapper $isBlurred={isModal} $ratio={ratio}>
                <ExitBtn onClick={() => setIsModal(true)} $ratio={ratio}>
                    <svg width="100%" height="100%" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 0C1.34315 0 0 1.34315 0 3V23C0 24.6569 1.34315 26 3 26H15C16.6569 26 18 24.6569 18 23V19H16V23C16 23.5523 15.5523 24 15 24H3C2.44772 24 2 23.5523 2 23V3C2 2.44772 2.44772 2 3 2H15C15.5523 2 16 2.44772 16 3V7.26087H18V3C18 1.34315 16.6569 0 15 0H3Z" fill="black"/>
                        <path d="M32 13L22 7.2265V12H10V14H22V18.7735L32 13Z" fill="black"/>
                    </svg>
                </ExitBtn>
                {FLOORS.map((floor, ind) => (
                    (ind === FLOORS.length - 1) ? null 
                    : (
                        <Floor 
                            key={floor.id}
                            $ratio={ratio}
                            onClick={() => handleMove(floor.id, floor.screen)} 
                            $active={floor.id === chosen}
                        >
                            <FloorLogoIcon background={floor.logo} $ratio={ratio}/>
                            <FloorTitle $ratio={ratio}>{floor.name}</FloorTitle>
                            <FloorCircleIcon background={floor.circle} $ratio={ratio}/>
                            {visitedFloors.includes(floor.id) && <VisitedIcon $ratio={ratio}/>}
                        </Floor>
                    )
                ))}
                <LastFloor
                    $ratio={ratio}
                    onClick={() => handleMove(FLOORS[5].id, FLOORS[5].screen)} 
                    $active={FLOORS[5].id === chosen}
                >
                    <FloorLogoIcon background={FLOORS[5].logo} $ratio={ratio}/>
                    <FloorTitle $ratio={ratio}>{FLOORS[5].name}</FloorTitle>
                    <FloorCircleIcon background={FLOORS[5].circle} $ratio={ratio}/>
                    {visitedFloors.includes(FLOORS[5].id) && <VisitedIcon $ratio={ratio}/>}
                </LastFloor>
            </Wrapper>
            {isGirlHint && <Hint src={hint} alt='' $ratio={ratio} onClick={() => setIsGirlHint(false)}/>}
            <ModalHint opened={isHint} isDark onClick={handleCloseHint} $ratio={ratio}>
                Нажми сюда, если захочешь завершить игру и сохранить баллы
            </ModalHint>
            {isHint && (
                <ModalHintButton $ratio={ratio}>
                    <svg width="100%" height="100%" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 0C1.34315 0 0 1.34315 0 3V23C0 24.6569 1.34315 26 3 26H15C16.6569 26 18 24.6569 18 23V19H16V23C16 23.5523 15.5523 24 15 24H3C2.44772 24 2 23.5523 2 23V3C2 2.44772 2.44772 2 3 2H15C15.5523 2 16 2.44772 16 3V7.26087H18V3C18 1.34315 16.6569 0 15 0H3Z" fill="black"/>
                        <path d="M32 13L22 7.2265V12H10V14H22V18.7735L32 13Z" fill="black"/>
                    </svg>
                </ModalHintButton>
            )}
            <Modal opened={isModal}>
                <Text>
                    Уверен, что хочешь завершить игру прямо сейчас?
                </Text>
                <ButtonsWrapper $ratio={ratio}>
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
        </>
    )
}