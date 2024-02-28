import circle1 from '../assets/images/floor1CircleIcon.png';
import circle2 from '../assets/images/floor2CircleIcon.png';
import circle3 from '../assets/images/floor3CircleIcon.png';
import circle4 from '../assets/images/floor4CircleIcon.png';
import circle5 from '../assets/images/floor5CircleIcon.png';
import circle6 from '../assets/images/floor6CircleIcon.png';
import floor1 from '../assets/images/floor1Icon.png';
import floor2 from '../assets/images/floor2Icon.png';
import floor3 from '../assets/images/floor3Icon.png';
import floor4 from '../assets/images/floor4Icon.png';
import floor5 from '../assets/images/floor5Icon.png';
import floor6 from '../assets/images/floor6Icon.png';
import { SCREENS } from './screens';

export const FLOORS = [
    {
        id: 1,
        screen: SCREENS.GAME_3_1,
        logo: floor1,
        circle: circle1,
        name: 'Розничный бизнес'
    },
    {
        id: 2,
        screen: SCREENS.GAME_2_1,
        logo: floor2,
        circle: circle2,
        name: 'Средний\nи малый бизнес'
    },
    {
        id: 3,
        screen: SCREENS.GAME_1_1,
        logo: floor3,
        circle: circle3,
        name: 'Корпоративно-инвестиционный бизнес'
    },
    {
        id: 4,
        screen: SCREENS.GAME_5_1,
        logo: floor4,
        circle: circle4,
        name: 'Технологический блок'
    },
    {
        id: 5,
        screen: SCREENS.GAME_4_1,
        logo: floor5,
        circle: circle5,
        name: 'Подразделения поддержки и контроля'
    },
    {
        id: 6,
        screen: SCREENS.INTERNSHIP_1,
        logo: floor6,
        circle: circle6,
        name: 'Стажировки',
    },
];