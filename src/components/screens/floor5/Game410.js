import { useEffect, useState } from 'react';
import bg from '../../../assets/images/floor5Finish.png';
import icon from '../../../assets/images/floor5FinishIcon.png';
import { useProgress } from '../../../contexts/ProgressContext';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';
import { FinishFloorScreen } from "../../shared/FinishFloorScreen";

export function Game410() {
    const {addItemPoints} = useProgress();
    const [isShowModal, setIsShowModal] = useState(false);

    const handleFindItem = () => {
        setIsShowModal(true);
        addItemPoints('floor5');
    }

    useEffect(() => {
        reachMetrikaGoal('finish_ppik')
    }, []);

    const finishText = 'В 2022 году в Финансовом университете открылась базовая кафедра ВТБ. ' +
    'На программе студенты изучают темы в области риск-менеджмента, работы с большими данными и автоматизации ' + 
    'банковских процессов, а по окончании получают возможность пройти практику в банке. И всё это — в брендированной ' +
    'аудитории ВТБ, оборудованной новейшими технологиями';

    return (
        <FinishFloorScreen finishText={finishText} background={bg} icon={icon} isShowModal={isShowModal}> 
            <svg width="100%" height="100%" viewBox="0 0 375 677" fill="none" preserveAspectRatio="xMinYMin slice" xmlns="http://www.w3.org/2000/svg">
                <rect onClick={handleFindItem} x="223" y="250" width="68" height="75" fill="transparent"/>
            </svg>
        </FinishFloorScreen>
    )
}