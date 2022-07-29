import React from "react";
import style from "./GardenPlan.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../store/store";
import {changeThemeC, ThemesType} from "./bll/themeReducer";
import SuperRadio from "./Radio/SuperRadio";

type ZoneType = {
    color: string
    textButton: string
    title: string
    text: string
}

type TextType = ZoneType[]

const themes = ['red', 'orange', 'green', 'blue', 'violet'];

const zone: TextType = [
    {
        color: 'red',
        textButton: ' Красная зона - в ней распологпается зона тихого отдыха с фонтаном и лавочками',
        title: 'ПЕРЕЧЕНЬ РАСТЕНИЙ В КРАСНОЙ ЗОНЕ',
        text: 'Красная зона - цвет самой жизни, символ природы и экологии,\n' +
            '                            гармонии и равновесия. Этот цвет ассоцициируется с возрождепнием, как весна, когда А это\n' +
            '                            цвет ассоциируется с возрождением как весна когда всё оживает и мир перевожается Он\n' +
            '                            успокаивает нас На физическом уровне так как именно Зелёная часть и Спектра легче всего\n' +
            '                            воспринимается глазом таким образом зелёный в психологии считаются положительным и даже\n' +
            '                            полезным Но с ним как есть любым другим активным цветом нужно знать меру'
    },
    {
        color: 'orange',
        textButton: ' Оранжевая зона - в ней распологпается зона тихого отдыха с фонтаном и лавочками',
        title: 'ПЕРЕЧЕНЬ РАСТЕНИЙ В ОРАНЖЕВОЙ ЗОНЕ',
        text: 'Оранжевая зона - цвет самой жизни, символ природы и экологии,\n' +
            '                            гармонии и равновесия. Этот цвет ассоцициируется с возрождепнием, как весна, когда А это\n' +
            '                            цвет ассоциируется с возрождением как весна когда всё оживает и мир перевожается Он\n' +
            '                            успокаивает нас На физическом уровне так как именно Зелёная часть и Спектра легче всего\n' +
            '                            воспринимается глазом таким образом зелёный в психологии считаются положительным и даже\n' +
            '                            полезным Но с ним как есть любым другим активным цветом нужно знать меру'
    },
    {
        color: 'green',
        textButton: ' Зеленая зона - в ней распологпается зона тихого отдыха с фонтаном и лавочками',
        title: 'ПЕРЕЧЕНЬ РАСТЕНИЙ В ЗЕЛЕНОЙ ЗОНЕ',
        text: 'Зеленая зона - цвет самой жизни, символ природы и экологии,\n' +
            '                            гармонии и равновесия. Этот цвет ассоцициируется с возрождепнием, как весна, когда А это\n' +
            '                            цвет ассоциируется с возрождением как весна когда всё оживает и мир перевожается Он\n' +
            '                            успокаивает нас На физическом уровне так как именно Зелёная часть и Спектра легче всего\n' +
            '                            воспринимается глазом таким образом зелёный в психологии считаются положительным и даже\n' +
            '                            полезным Но с ним как есть любым другим активным цветом нужно знать меру'
    },
    {
        color: 'blue',
        textButton: ' Синяя зона - в ней распологпается зона тихого отдыха с фонтаном и лавочками',
        title: 'ПЕРЕЧЕНЬ РАСТЕНИЙ В СИНЕЙ ЗОНЕ',
        text: 'Синяя зона - цвет самой жизни, символ природы и экологии,\n' +
            '                            гармонии и равновесия. Этот цвет ассоцициируется с возрождепнием, как весна, когда А это\n' +
            '                            цвет ассоциируется с возрождением как весна когда всё оживает и мир перевожается Он\n' +
            '                            успокаивает нас На физическом уровне так как именно Зелёная часть и Спектра легче всего\n' +
            '                            воспринимается глазом таким образом зелёный в психологии считаются положительным и даже\n' +
            '                            полезным Но с ним как есть любым другим активным цветом нужно знать меру'
    },
    {
        color: 'violet',
        textButton: 'Фиолетовая зона - в ней распологпается зона тихого отдыха с фонтаном и лавочками',
        title: 'ПЕРЕЧЕНЬ РАСТЕНИЙ В ФИОЛЕТОВОЙ ЗОНЕ',
        text: 'Фиолетовая зона - цвет самой жизни, символ природы и экологии,\n' +
            '                            гармонии и равновесия. Этот цвет ассоцициируется с возрождепнием, как весна, когда А это\n' +
            '                            цвет ассоциируется с возрождением как весна когда всё оживает и мир перевожается Он\n' +
            '                            успокаивает нас На физическом уровне так как именно Зелёная часть и Спектра легче всего\n' +
            '                            воспринимается глазом таким образом зелёный в психологии считаются положительным и даже\n' +
            '                            полезным Но с ним как есть любым другим активным цветом нужно знать меру'
    }
    ,
]


export const GardenPlan = () => {

    const theme = useSelector<AppStoreType, string>(state => state.theme.startTheme);

    const dispatch = useDispatch()

    const onChangeCallback = (theme: ThemesType) => {
        dispatch(changeThemeC(theme))
    }

    const themeTexts = zone.filter(t => t.color === theme)[0]

    return (
        <div className={style.plan}>
            <div className={style.column}>
                <div style={{
                    width: '100%',
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: "space-between",
                    marginRight: "24px",
                    padding: "24px 0"
                }}>
                    <div className={style.header}>
                        <div className={style.headerTitle}>
                            ПЛАН САДА
                        </div>
                        <div className={style.headerText}>
                            Парк разделен на 2 зоны : открытую, для активного отдыха и закрытую в тени садовых деревьев.
                        </div>
                    </div>
                    <div className={style.buttons}>

                    <span className={style['buttons-' + theme]}>
                        <SuperRadio
                            className={style['button-' + theme]}
                            options={themes}
                            value={theme}
                            onChangeOption={onChangeCallback}
                        />
                    </span>

                        <div className={style['buttonsInfo-' + theme]}>
                            {themeTexts.textButton}
                        </div>
                    </div>
                </div>
                <div className={style['planBody-' + theme]}>
                    <div className={style.planBodyInfo}>
                        <div className={style.planBodyTitle}>{themeTexts.title}</div>
                        <div className={style.planBodyText}>{themeTexts.text}</div>
                    </div>
                </div>
            </div>
            <div className={style.picture}>
                <button>смотреть план</button>
            </div>
        </div>
    );
}
