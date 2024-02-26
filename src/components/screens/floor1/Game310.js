import { useState } from 'react';
import bg from '../../../assets/images/floor1Finish.png';
import icon from '../../../assets/images/floor1FinishIcon.png';
import { useProgress } from '../../../contexts/ProgressContext';
import { FinishFloorScreen } from "../../shared/FinishFloorScreen";

export function Game310() {
    const {addItemPoints} = useProgress();
    const [isShowModal, setIsShowModal] = useState(false);

    const handleFindItem = () => {
        setIsShowModal(true);
        addItemPoints('floor1');
    }

    const finishText = '«Сократ» — умный чат-бот, который знает всё о подготовке к трудоустройству ' + 
    'и работе в банке. Он станет твоим личным гидом на пути к успешной карьере, предоставляя ценные ' + 
    'советы и поддержку на каждом этапе.\n\nПомимо погружения в философию карьерного роста от ВТБ, ' +
    'тебя ждут рекомендации по этапам отбора, практические задания и возможность выиграть крутые призы!';

    return (
        <FinishFloorScreen finishText={finishText} background={bg} icon={icon} isShowModal={isShowModal}>
            <svg width="100%" height="100%" viewBox="0 0 375 677" preserveAspectRatio="xMinYMin slice" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect onClick={handleFindItem} x="263" y="257" width="66" height="34" fill="transparent"/>
            </svg>
        </FinishFloorScreen>
    )
}