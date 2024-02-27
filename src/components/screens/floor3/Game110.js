import { useEffect, useState } from 'react';
import bg from '../../../assets/images/floor3Finish.png';
import icon from '../../../assets/images/floor3FinishIcon.png';
import { useProgress } from '../../../contexts/ProgressContext';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';
import { FinishFloorScreen } from "../../shared/FinishFloorScreen";

export function Game110() {
    const {addItemPoints} = useProgress();
    const [isShowModal, setIsShowModal] = useState(false);

    const handleFindItem = () => {
        setIsShowModal(true);
        addItemPoints('floor3');
    }

    useEffect(() => {
        reachMetrikaGoal('finish_kib');
    }, []);

    const finishText = 'Именные Гранты ВТБ — это 5 недель интенсивной прокачки навыков, ' + 
    'мастер-классы от ведущих экспертов, карьерные консультации, подарки от Банка ВТБ и главный ' + 
    'приз — грант в размере 200 000 рублей на профессиональное развитие для 20 лучших участников программы';

    return (
        <FinishFloorScreen finishText={finishText} background={bg} icon={icon} isShowModal={isShowModal}>
            <svg width="100%" height="100%" viewBox="0 0 375 677" fill="none" preserveAspectRatio="xMinYMin slice" xmlns="http://www.w3.org/2000/svg">
                <rect onClick={handleFindItem} x="249" y="331" width="36" height="36" fill="transparent"/>
            </svg>
        </FinishFloorScreen>
    )
}