import bg from '../../../assets/images/floor5Finish.png';
import icon from '../../../assets/images/floor5FinishIcon.png';
import { FinishFloorScreen } from "../../shared/FinishFloorScreen";

export function Game410() {
    const finishText = 'В 2022 году в Финансовом университете открылась базовая кафедра ВТБ. ' +
    'На программе студенты изучают темы в области риск-менеджмента, работы с большими данными и автоматизации ' + 
    'банковских процессов, а по окончании получают возможность пройти практику в банке. И всё это — в брендированной ' +
    'аудитории ВТБ, оборудованной новейшими технологиями';

    return <FinishFloorScreen finishText={finishText} background={bg} icon={icon}/>
}