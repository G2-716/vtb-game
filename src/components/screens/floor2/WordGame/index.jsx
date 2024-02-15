import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { Game } from "./parts";

import { ANSWERS, CELLS_AMOUNT, TRIES_AMOUNT } from "./constants";
import { GameHeader } from "../../../shared/GameHeader";
import { Modal } from "../../../shared/Modal";
import { SkipModal } from "../../../shared/SkipModal";
import { colors } from "../../../../constants/colors";
import { Text } from "../../../shared/Text";
import { Button } from "../../../shared/Button";
import { useSizeRatio } from "../../../../contexts/SizeRatioContext";
import { SCREENS } from "../../../../constants/screens";
import { useProgress } from "../../../../contexts/ProgressContext";
import { EndGameModal } from "../../../shared/EndGameModal";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;

   ${({$isBlurred}) => $isBlurred ? 'filter: blur(1.5px)' : ''};
`;

const ButtonStyled = styled(Button)`
    margin: calc(40px * ${({$ratio}) => $ratio}) auto 0;
`;

export const WordGame = ({isHiddenKeyboard, isBlurred}) => {
    const getArray = (length, content) => {
        const func = typeof content === 'function' ? content : () => content;
        return Array.from({length}, func);
    };
    const ratio = useSizeRatio();
    const {next, addWordPoints} = useProgress();

    const [isRules, setIsRules] = useState(false);
    const [isSkipping, setIsSkipping] = useState(false);
    const [endModal, setEndModal] = useState({shown: false, points: 0});
    const [answer, setAnswer] = useState('');

    const isScreenBlurred = useMemo(() => (
        isBlurred || isRules || isSkipping || endModal.shown
    ), [isRules, isBlurred, isSkipping, endModal.shown]);
    const initialTries = useMemo(() => [...getArray(TRIES_AMOUNT, getArray(CELLS_AMOUNT, ''))],[]);
    
    const [tries, setTries] = useState(initialTries);
    const [currentTry, setCurrentTry] = useState(0);
    const [currentLetterId, setCurrentLetterId] = useState(0);
    const [checkedLetters, setCheckedLetters] = useState({});

    const isDoneBtnActive = useMemo(() => (
        tries[currentTry].filter(tr => typeof (tr.letter) === 'string').length === tries[currentTry].length
    ), [tries, currentTry]);
    
    const getAllIndexes = (array, value) => array.reduce((a, e, i) => (e === value) ? a.concat(i) : a, []);

    const getAllObjectIndexes = (array, label, value) => array.reduce((a, e, i) => (e[label] === value) ? a.concat(i) : a, []);

    useEffect(() => {
        setAnswer(() => ANSWERS[Math.floor(Math.random() * ANSWERS.length)].split(''));
    }, [])

    const onChooseLetter = useCallback((letter) => {
        let id = currentLetterId;
        if (id + 1 > CELLS_AMOUNT) return;
        const newTries = [...tries];
        const newLine = [...newTries[currentTry]];
        newLine[id] = { letter };
        newTries[currentTry] = newLine;
        setTries([...newTries]);
        setCurrentLetterId(id + 1);
    }, [currentLetterId, currentTry, tries]);

    const handleResult = useCallback((points) => {
        setEndModal({shown: true, points});
        addWordPoints(points)
    }, [addWordPoints])

    const onAcceptTry = useCallback(() => {
        if (!isDoneBtnActive) return;
        const newTries = [...tries];
        const newLine = [...newTries[currentTry]];
        const correctLetters = [];
        const checked = {...checkedLetters};

        newTries[currentTry] = newLine.reduce((coloredArr, n, i) => {
            let bg = '#C5D5FF';
            let correct = false;

            if (answer.includes(n.letter)) {
                if (getAllIndexes(answer, n.letter).includes(i)) {
                    bg = '#AF00FF';
                    correct = true;
                    correctLetters.push(n.letter);
                    checked[n.letter] = bg;
                    setCheckedLetters(prev => ({...prev, [n.letter]: bg}));
                } else if (
                    getAllObjectIndexes(newLine, 'letter', n.letter).includes(i) 
                    && answer.filter(letter => letter === n.letter).length > coloredArr.filter(({ letter }) => letter === n.letter).length
                ) {
                    bg = '#0096FF';
                }
            }

            if (!checked[n.letter]) checked[n.letter] = bg;

            return [...coloredArr, ({...n, bg, correct})];
        }, []).map(n => 
            (correctLetters.filter((letter) => letter === n.letter).length === answer.filter(letter => letter === n.letter).length 
                && !n.correct ? ({...n, bg: '#C5D5FF'}) : n)
        );

        setTries([...newTries]);
        setCheckedLetters(checked);

        if (newTries[currentTry].filter(letter => !!letter.correct).length === newTries[currentTry].length) {
            let points = 1;
            if (currentTry < 3) points = 3;
            if (currentTry === 3) points = 2;
            handleResult(points)
            return;
        }

        if (currentTry + 1 === tries.length) {
            setCurrentLetterId(0);
            handleResult(0)
            
            return;
        } 

        setTimeout(() => {
            setCurrentLetterId(0);
        }, 0);
        
        setCurrentTry(id => id + 1);
    }, [isDoneBtnActive, tries, currentTry, handleResult]);

    const onDelete = useCallback(() => {
        if (currentLetterId - 1 < 0) return;
        const newTries = [...tries];
        const newLine = [...newTries[currentTry]];
        newLine[currentLetterId - 1] = {letter: ''};
        newTries[currentTry] = newLine;
        setTries([...newTries]);
        setCurrentLetterId(letterId => --letterId);
    }, [currentLetterId, tries, currentTry]);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (/[а-яА-Я]/ig.test(e.key)) onChooseLetter(e.key.toLowerCase());
            if (e.code === 'Backspace') {
                onDelete();
            }
            if (e.code === 'Enter') {
                onAcceptTry();
            }
        };

        window.addEventListener('keydown', onKeyDown);
        
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [onChooseLetter, onDelete, onAcceptTry]);
    
    return (
        <>
            <Wrapper $isBlurred={isScreenBlurred}>
                <GameHeader
                    title={'Угадай\nслово'}
                    size={40}
                    align="baseline"
                    isHiddenButtons={isScreenBlurred}
                    onSkip={() => setIsSkipping(true)}
                    onClickRules={() => setIsRules(true)}
                />
                <Game
                    onChooseLetter={onChooseLetter}
                    onAcceptTry={onAcceptTry}
                    onDelete={onDelete}
                    tries={tries}
                    isDoneBtnActive={isDoneBtnActive}
                    checkedLetters={checkedLetters}
                    isHiddenKeyboard={isHiddenKeyboard}
                />
            </Wrapper>
            <Modal opened={isRules}>
                <Text>
                    {'Твоя задача — открыть загаданное слово. Вводи предполагаемое слово и нажимай на галочку. \n\n'}
                    Если в введённом слове буква находится на том же месте, что и в загаданном, то она подсветится <b style={{color: colors.purple}}>фиолетовым</b>.{'\n'}
                    Если буква есть в искомом слове, но находится на другом месте, она подсветится  <b style={{color: colors.blue}}>синим</b>.
                </Text>
                <ButtonStyled $ratio={ratio}onClick={() => setIsRules(false)}>Всё понятно</ButtonStyled>
            </Modal>
            <SkipModal opened={isSkipping} onContinue={() => setIsSkipping(false)} onSkip={() => next(SCREENS.LIFT_3)}/>
            <EndGameModal opened={endModal.shown} points={endModal.points} onNext={() => next()}/>
        </>
        
    );
};
