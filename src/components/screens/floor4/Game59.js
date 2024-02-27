import { useEffect, useState } from 'react';
import bg from '../../../assets/images/floor4Finish.png';
import icon from '../../../assets/images/floor4FinishIcon.png';
import { useProgress } from '../../../contexts/ProgressContext';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';
import { FinishFloorScreen } from "../../shared/FinishFloorScreen";

export function Game59() {
    const {addItemPoints} = useProgress();
    const [isShowModal, setIsShowModal] = useState(false);

    const handleFindItem = () => {
        setIsShowModal(true);
        addItemPoints('floor4');
    }
    useEffect(() => {
        reachMetrikaGoal('finish_tb')
    }, [])

    const finishText = 'С 2017 года мы запустили Школы ВТБ в Финансовом университете и НИУ ВШЭ. ' + 
    'Студенты участвуют в профильных лекциях и мастер-классах от экспертов банка и университетов. ' + 
    'Погружаясь в финансовую сферу, участники Школ развивают свои профессиональные навыки и создают ' +
    'настоящий\nбизнес-проект в команде';

    return (
        <FinishFloorScreen finishText={finishText} background={bg} icon={icon} isShowModal={isShowModal}>
            <svg width="100%" height="100%" viewBox="0 0 375 677" preserveAspectRatio="xMinYMin slice" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect onClick={handleFindItem} x="188" y="305" width="52" height="46" fill="transparent"/>
            </svg>
        </FinishFloorScreen>
    )
}