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

    const finishText = 'Совместно с ведущими вузами Москвы для участников олимпиады «Я — профессионал» ВТБ ежегодно проводит весенние школы по двум направлениям: бизнес-информатика и финансы и кредит. \n\n' +
    'Программа состоит из лекций, мастер-классов и митапов от экспертов, а ещё разработка собственных бизнес-проектов.';

    return (
        <FinishFloorScreen finishText={finishText} background={bg} icon={icon} isShowModal={isShowModal}>
            <svg width="100%" height="100%" viewBox="0 0 375 677" preserveAspectRatio="xMinYMin slice" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect onClick={handleFindItem} x="188" y="305" width="52" height="46" fill="transparent"/>
            </svg>
        </FinishFloorScreen>
    )
}