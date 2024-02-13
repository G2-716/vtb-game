import bg from '../../../assets/images/floor3Finish.png';
import icon from '../../../assets/images/floor3FinishIcon.png';
import { FinishFloorScreen } from "../../shared/FinishFloorScreen";

export function Game19() {
    const finishText = 'Именные Гранты ВТБ — это 5 недель интенсивной прокачки навыков, ' + 
    'мастер-классы от ведущих экспертов, карьерные консультации, подарки от Банка ВТБ и главный ' + 
    'приз — грант в размере 200 000 рублей на профессиональное развитие для 20 лучших участников программы';

    return <FinishFloorScreen finishText={finishText} background={bg} icon={icon}/>
}