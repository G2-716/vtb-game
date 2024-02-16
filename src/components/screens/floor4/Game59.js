import bg from '../../../assets/images/floor4Finish.png';
import icon from '../../../assets/images/floor4FinishIcon.png';
import { FinishFloorScreen } from "../../shared/FinishFloorScreen";

export function Game59() {
    const finishText = 'С 2017 года мы запустили Школы ВТБ в Финансовом университете и НИУ ВШЭ. ' + 
    'Студенты участвуют в профильных лекциях и мастер-классах от экспертов банка и университетов. ' + 
    'Погружаясь в финансовую сферу, участники Школ развивают свои профессиональные навыки и создают ' +
    'настоящий бизнес-проект в команде';

    return <FinishFloorScreen finishText={finishText} background={bg} icon={icon}/>
}