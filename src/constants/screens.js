export const SCREENS = {
    INTRO_1: 'INTRO_1',
    INTRO_2: 'INTRO_2',
    INTRO_3: 'INTRO_3',
    INTRO_4: 'INTRO_4',
    LIFT_1: 'LIFT_1',
    LIFT_2: 'LIFT_2',
    LIFT_3: 'LIFT_3',
    GAME_1_1: 'GAME_1_1',
    GAME_1_2: 'GAME_1_2',
    GAME_1_3: 'GAME_1_3',
    GAME_1_4: 'GAME_1_4',
    GAME_1_5: 'GAME_1_5',
    GAME_1_6: 'GAME_1_6',
    GAME_1_7: 'GAME_1_7',
    GAME_1_8: 'GAME_1_8',
    GAME_1_9: 'GAME_1_9',
    GAME_1_10: 'GAME_1_10',
    GAME_2_1: 'GAME_2_1',
    GAME_2_2: 'GAME_2_2',
    GAME_2_3: 'GAME_2_3',
    GAME_2_4: 'GAME_2_4',
    GAME_2_5: 'GAME_2_5',
    GAME_2_6: 'GAME_2_6',
    GAME_2_7: 'GAME_2_7',
    GAME_2_8: 'GAME_2_8',
    GAME_2_9: 'GAME_2_9',
    GAME_3_1: 'GAME_3_1',
    GAME_3_2: 'GAME_3_2',
    GAME_3_3: 'GAME_3_3',
    GAME_3_4: 'GAME_3_4',
    GAME_3_5: 'GAME_3_5',
    GAME_3_6: 'GAME_3_6',
    GAME_3_7: 'GAME_3_7',
    GAME_3_8: 'GAME_3_8',
    GAME_3_9: 'GAME_3_9',
    GAME_3_10: 'GAME_3_10',
    GAME_4_1: 'GAME_4_1',
    GAME_4_2: 'GAME_4_2',
    GAME_4_3: 'GAME_4_3',
    GAME_4_4: 'GAME_4_4',
    GAME_4_5: 'GAME_4_5',
    GAME_4_6: 'GAME_4_6',
    GAME_4_7: 'GAME_4_7',
    GAME_4_8: 'GAME_4_8',
    GAME_4_9: 'GAME_4_9',
    GAME_4_10: 'GAME_4_10',
    GAME_5_1: 'GAME_5_1',
    GAME_5_2: 'GAME_5_2',
    GAME_5_3: 'GAME_5_3',
    GAME_5_4: 'GAME_5_4',
    GAME_5_5: 'GAME_5_5',
    GAME_5_6: 'GAME_5_6',
    GAME_5_7: 'GAME_5_7',
    GAME_5_8: 'GAME_5_8',
    GAME_5_9: 'GAME_5_9',
    INTERNSHIP_1: 'INTERNSHIP_1',
    INTERNSHIP_2: 'INTERNSHIP_2',
    INTERNSHIP_3: 'INTERNSHIP_3',
    TEST_1: 'TEST_1',
    TEST_2: 'TEST_2',
    TEST_3: 'TEST_3',
    TEST_4: 'TEST_4',
    TEST_5: 'TEST_5',
    TEST_6: 'TEST_6',
    TEST_7: 'TEST_7',
    TEST_8: 'TEST_8',
    TEST_9: 'TEST_9',
    TEST_10: 'TEST_10',
    TEST_11: 'TEST_11',
    TEST_12: 'TEST_12',
    FINAL_1: 'FINAL_1',
    FINAL_2: 'FINAL_2',
    FINAL_3: 'FINAL_3',
    FINAL_4: 'FINAL_4',
}

export const NEXT_SCREENS = {
    [SCREENS.INTRO_1]: SCREENS.INTRO_2,
    [SCREENS.INTRO_2]: SCREENS.INTRO_3,
    [SCREENS.INTRO_3]: SCREENS.INTRO_4,
    [SCREENS.INTRO_4]: SCREENS.LIFT_1,
    [SCREENS.LIFT_1]: SCREENS.LIFT_2,
    [SCREENS.LIFT_2]: SCREENS.LIFT_3,
    [SCREENS.LIFT_3]: SCREENS.GAME_1_1,
    [SCREENS.GAME_1_1]: SCREENS.GAME_1_2,
    [SCREENS.GAME_1_2]: SCREENS.GAME_1_3,
    [SCREENS.GAME_1_3]: SCREENS.GAME_1_4,
    [SCREENS.GAME_1_4]: SCREENS.GAME_1_5,
    [SCREENS.GAME_1_5]: SCREENS.GAME_1_6,
    [SCREENS.GAME_1_6]: SCREENS.GAME_1_7,
    [SCREENS.GAME_1_7]: SCREENS.GAME_1_8,
    [SCREENS.GAME_1_8]: SCREENS.GAME_1_9,
    [SCREENS.GAME_1_9]: SCREENS.GAME_1_10,
    [SCREENS.GAME_1_10]: SCREENS.GAME_2_1,
    [SCREENS.GAME_2_1]: SCREENS.GAME_2_2,
    [SCREENS.GAME_2_2]: SCREENS.GAME_2_3,
    [SCREENS.GAME_2_3]: SCREENS.GAME_2_4,
    [SCREENS.GAME_2_4]: SCREENS.GAME_2_5,
    [SCREENS.GAME_2_5]: SCREENS.GAME_2_6,
    [SCREENS.GAME_2_6]: SCREENS.GAME_2_7,
    [SCREENS.GAME_2_7]: SCREENS.GAME_2_8,
    [SCREENS.GAME_2_8]: SCREENS.GAME_2_9,
    [SCREENS.GAME_2_9]: SCREENS.GAME_3_1,
    [SCREENS.GAME_3_1]: SCREENS.GAME_3_2,
    [SCREENS.GAME_3_2]: SCREENS.GAME_3_3,
    [SCREENS.GAME_3_3]: SCREENS.GAME_3_4,
    [SCREENS.GAME_3_4]: SCREENS.GAME_3_5,
    [SCREENS.GAME_3_5]: SCREENS.GAME_3_6,
    [SCREENS.GAME_3_6]: SCREENS.GAME_3_7,
    [SCREENS.GAME_3_7]: SCREENS.GAME_3_8,
    [SCREENS.GAME_3_8]: SCREENS.GAME_3_9,
    [SCREENS.GAME_3_9]: SCREENS.GAME_3_10,
    [SCREENS.GAME_3_10]: SCREENS.GAME_4_1,
    [SCREENS.GAME_4_1]: SCREENS.GAME_4_2,
    [SCREENS.GAME_4_2]: SCREENS.GAME_4_3,
    [SCREENS.GAME_4_3]: SCREENS.GAME_4_4,
    [SCREENS.GAME_4_4]: SCREENS.GAME_4_5,
    [SCREENS.GAME_4_5]: SCREENS.GAME_4_6,
    [SCREENS.GAME_4_6]: SCREENS.GAME_4_7,
    [SCREENS.GAME_4_7]: SCREENS.GAME_4_8,
    [SCREENS.GAME_4_8]: SCREENS.GAME_4_9,
    [SCREENS.GAME_4_9]: SCREENS.GAME_4_10,
    [SCREENS.GAME_4_10]: SCREENS.GAME_5_1,
    [SCREENS.GAME_5_1]: SCREENS.GAME_5_2,
    [SCREENS.GAME_5_2]: SCREENS.GAME_5_3,
    [SCREENS.GAME_5_3]: SCREENS.GAME_5_4,
    [SCREENS.GAME_5_4]: SCREENS.GAME_5_5,
    [SCREENS.GAME_5_5]: SCREENS.GAME_5_6,
    [SCREENS.GAME_5_6]: SCREENS.GAME_5_7,
    [SCREENS.GAME_5_7]: SCREENS.GAME_5_8,
    [SCREENS.GAME_5_8]: SCREENS.GAME_5_9,
    [SCREENS.GAME_5_9]: SCREENS.INTERNSHIP_1,
    [SCREENS.INTERNSHIP_1]: SCREENS.INTERNSHIP_2,
    [SCREENS.INTERNSHIP_2]: SCREENS.INTERNSHIP_3,
    [SCREENS.INTERNSHIP_3]: SCREENS.TEST_1,
    [SCREENS.TEST_1]: SCREENS.TEST_2,
    [SCREENS.TEST_2]: SCREENS.TEST_3,
    [SCREENS.TEST_3]: SCREENS.TEST_4,
    [SCREENS.TEST_4]: SCREENS.TEST_5,
    [SCREENS.TEST_5]: SCREENS.TEST_6,
    [SCREENS.TEST_6]: SCREENS.TEST_7,
    [SCREENS.TEST_7]: SCREENS.TEST_8,
    [SCREENS.TEST_8]: SCREENS.TEST_9,
    [SCREENS.TEST_9]: SCREENS.TEST_10,
    [SCREENS.TEST_10]: SCREENS.TEST_11,
    [SCREENS.TEST_11]: SCREENS.TEST_12,
    [SCREENS.TEST_12]: SCREENS.FINAL_1,
    [SCREENS.FINAL_1]: SCREENS.FINAL_2,
    [SCREENS.FINAL_2]: SCREENS.FINAL_3,
    [SCREENS.FINAL_3]: SCREENS.FINAL_4,
    [SCREENS.FINAL_4]: null,
}