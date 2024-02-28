import { useEffect, useState } from 'react';
import bg from '../../../assets/images/floor2Finish.png';
import icon from '../../../assets/images/floor2FinishIcon.png';
import { useProgress } from '../../../contexts/ProgressContext';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';
import { FinishFloorScreen } from "../../shared/FinishFloorScreen";

export function Game29() {
    const {addItemPoints} = useProgress();
    const [isShowModal, setIsShowModal] = useState(false);

    const handleFindItem = () => {
        setIsShowModal(true);
        addItemPoints('floor2');
    }

    useEffect(() => {
        reachMetrikaGoal('finish_smb');
    }, []);

    const finishText = 'В наших карьерных сообществах в VK и TG ' + 
    '«Карьера в ВТБ» мы рассказываем об актуальных вакансиях, секретах построения успешной ' + 
    'карьеры и внутренней жизни банка. А ещё — делимся историями о профессиональном пути наших ' + 
    'коллег и объясняем, почему люди — большая ценность и движущая сила ВТБ';

    return (
        <FinishFloorScreen finishText={finishText} background={bg} icon={icon} isShowModal={isShowModal}>
            <svg width="100%" height="100%" viewBox="0 0 375 677" preserveAspectRatio="xMinYMin slice" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect onClick={handleFindItem} x="319" y="211" width="49" height="64" fill="transparent"/>
            </svg>
        </FinishFloorScreen>
    )
}