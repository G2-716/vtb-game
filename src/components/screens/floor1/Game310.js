import bg from '../../../assets/images/floor1Finish.png';
import icon from '../../../assets/images/floor1FinishIcon.png';
import { FinishFloorScreen } from "../../shared/FinishFloorScreen";

export function Game310() {
    const finishText = '«Сократ» — умный чат-бот, который знает всё о подготовке к трудоустройству ' + 
    'и работе в банке. Он станет твоим личным гидом на пути к успешной карьере, предоставляя ценные ' + 
    'советы и поддержку на каждом этапе. Помимо погружения в философию карьерного роста от ВТБ, ' +
    'тебя ждут рекомендации по этапам отбора, практические задания и возможность выиграть крутые призы!';

    return <FinishFloorScreen finishText={finishText} background={bg} icon={icon}/>
}