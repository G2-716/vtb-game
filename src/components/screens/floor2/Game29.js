import bg from '../../../assets/images/floor2Finish.png';
import icon from '../../../assets/images/floor2FinishIcon.png';
import { FinishFloorScreen } from "../../shared/FinishFloorScreen";

export function Game29() {
    const finishText = 'В наших карьерных сообществах в VK и TG ' + 
    '«Карьера в ВТБ» мы рассказываем об актуальных вакансиях, секретах построения успешной ' + 
    'карьеры и внутренней жизни банка. А еще — делимся историями о профессиональном пути наших ' + 
    'коллег и объясняем, почему люди — большая ценность и движущая сила ВТБ';

    return <FinishFloorScreen finishText={finishText} background={bg} icon={icon}/>
}