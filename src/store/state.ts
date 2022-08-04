import plant2 from "../components/c2-Body/b1-Main/m4-Cards/img/plant2.svg";
import plant1 from "../components/c2-Body/b1-Main/m4-Cards/img/plant1.svg";

export type ZonesType = 'red' | 'orange' | 'green' | 'blue' | 'violet';

export const themes: ZonesType[] = ['red', 'orange', 'green', 'blue', 'violet'];

export type ZoneType = {
    idZone: ZonesType
    textButton: string
    title: string
    text: string
    cardText: string
}
export type CardType = {
    idCard: string
    img: string
    title: string
    isDone: boolean
}
export type CardsType = {
    [key: string]: Array<CardType>
}

const zoneRed = 'red';
const zoneOrange = 'orange';
const zoneGreen = 'green';
const zoneBlue = 'blue';
const zoneViolet = 'violet';

export const cards: CardsType = {
    [zoneRed]: [
        {idCard: 'r1', img: plant2, title: 'Дерево 1', isDone: false},
        {idCard: 'r2', img: plant1, title: 'Дерево 2', isDone: false},
        {idCard: 'r3', img: plant1, title: 'Дерево 3', isDone: false},
        {idCard: 'r4', img: plant1, title: 'Дерево 4', isDone: false},
        {idCard: 'r5', img: plant1, title: 'Дерево 5', isDone: false},
    ],
    [zoneOrange]: [
        {idCard: 'o1', img: plant2, title: 'Куст 1', isDone: false},
        {idCard: 'o2', img: plant2, title: 'Куст 2', isDone: false},
        {idCard: 'o3', img: plant1, title: 'Куст 3', isDone: false},
    ],
    [zoneGreen]: [
        {idCard: 'g1', img: plant2, title: 'Цветок 1', isDone: false},
        {idCard: 'g2', img: plant2, title: 'Цветок 2', isDone: false},
        {idCard: 'g3', img: plant2, title: 'Цветок 3', isDone: false},
        {idCard: 'g4', img: plant2, title: 'Цветок 4', isDone: false},
        {idCard: 'g5', img: plant2, title: 'Цветок 5', isDone: false},
        {idCard: 'g6', img: plant2, title: 'Цветок 6', isDone: false},
        {idCard: 'g7', img: plant2, title: 'Цветок 7', isDone: false},
    ],
    [zoneBlue]: [
        {idCard: 'b1', img: plant1, title: 'Ягода 1', isDone: false},
        {idCard: 'b2', img: plant1, title: 'Ягода 2', isDone: false},
        {idCard: 'b3', img: plant1, title: 'Ягода 3', isDone: false},
        {idCard: 'b4', img: plant1, title: 'Ягода 4', isDone: false},
    ],
    [zoneViolet]: [
        {idCard: 'v1', img: plant1, title: 'Трава 1', isDone: false},
        {idCard: 'v2', img: plant1, title: 'Трава 2', isDone: false},
        {idCard: 'v3', img: plant2, title: 'Трава 3', isDone: false},
    ]
};

export const zones: Array<ZoneType> = [
    {
        idZone: zoneRed,
        textButton: ' Красная зона - в ней распологпается зона тихого отдыха с фонтаном и лавочками',
        title: 'ПЕРЕЧЕНЬ РАСТЕНИЙ В КРАСНОЙ ЗОНЕ',
        text: 'Красная зона - цвет самой жизни, символ природы и экологии,\n' +
            '                            гармонии и равновесия. Этот цвет ассоцициируется с возрождепнием, как весна, когда А это\n' +
            '                            цвет ассоциируется с возрождением как весна когда всё оживает и мир перевожается Он\n' +
            '                            успокаивает нас На физическом уровне так как именно Зелёная часть и Спектра легче всего\n' +
            '                            воспринимается глазом таким образом зелёный в психологии считаются положительным и даже\n' +
            '                            полезным Но с ним как есть любым другим активным цветом нужно знать меру',
        cardText: 'Растения красной зоны: лимонник китайский, калина давида, дикий виноград, пузыреплодник, дерен'
    },
    {
        idZone: zoneOrange,
        textButton: ' Оранжевая зона - в ней распологпается зона тихого отдыха с фонтаном и лавочками',
        title: 'ПЕРЕЧЕНЬ РАСТЕНИЙ В ОРАНЖЕВОЙ ЗОНЕ',
        text: 'Оранжевая зона - цвет самой жизни, символ природы и экологии,\n' +
            '                            гармонии и равновесия. Этот цвет ассоцициируется с возрождепнием, как весна, когда А это\n' +
            '                            цвет ассоциируется с возрождением как весна когда всё оживает и мир перевожается Он\n' +
            '                            успокаивает нас На физическом уровне так как именно Зелёная часть и Спектра легче всего\n' +
            '                            воспринимается глазом таким образом зелёный в психологии считаются положительным и даже\n' +
            '                            полезным Но с ним как есть любым другим активным цветом нужно знать меру',
        cardText: 'Растения оранжевой зоны: лимонник китайский, калина давида, дикий виноград, пузыреплодник, дерен'
    },
    {
        idZone: zoneGreen,
        textButton: ' Зеленая зона - в ней распологпается зона тихого отдыха с фонтаном и лавочками',
        title: 'ПЕРЕЧЕНЬ РАСТЕНИЙ В ЗЕЛЕНОЙ ЗОНЕ',
        text: 'Зеленая зона - цвет самой жизни, символ природы и экологии,\n' +
            '                            гармонии и равновесия. Этот цвет ассоцициируется с возрождепнием, как весна, когда А это\n' +
            '                            цвет ассоциируется с возрождением как весна когда всё оживает и мир перевожается Он\n' +
            '                            успокаивает нас На физическом уровне так как именно Зелёная часть и Спектра легче всего\n' +
            '                            воспринимается глазом таким образом зелёный в психологии считаются положительным и даже\n' +
            '                            полезным Но с ним как есть любым другим активным цветом нужно знать меру',
        cardText: 'Растения зеленой зоны: лимонник китайский, калина давида, дикий виноград, пузыреплодник, дерен'
    },
    {
        idZone: zoneBlue,
        textButton: ' Синяя зона - в ней распологпается зона тихого отдыха с фонтаном и лавочками',
        title: 'ПЕРЕЧЕНЬ РАСТЕНИЙ В СИНЕЙ ЗОНЕ',
        text: 'Синяя зона - цвет самой жизни, символ природы и экологии,\n' +
            '                            гармонии и равновесия. Этот цвет ассоцициируется с возрождепнием, как весна, когда А это\n' +
            '                            цвет ассоциируется с возрождением как весна когда всё оживает и мир перевожается Он\n' +
            '                            успокаивает нас На физическом уровне так как именно Зелёная часть и Спектра легче всего\n' +
            '                            воспринимается глазом таким образом зелёный в психологии считаются положительным и даже\n' +
            '                            полезным Но с ним как есть любым другим активным цветом нужно знать меру',
        cardText: 'Растения синей зоны: лимонник китайский, калина давида, дикий виноград, пузыреплодник, дерен'
    },
    {
        idZone: zoneViolet,
        textButton: 'Фиолетовая зона - в ней распологпается зона тихого отдыха с фонтаном и лавочками',
        title: 'ПЕРЕЧЕНЬ РАСТЕНИЙ В ФИОЛЕТОВОЙ ЗОНЕ',
        text: 'Фиолетовая зона - цвет самой жизни, символ природы и экологии,\n' +
            '                            гармонии и равновесия. Этот цвет ассоцициируется с возрождепнием, как весна, когда А это\n' +
            '                            цвет ассоциируется с возрождением как весна когда всё оживает и мир перевожается Он\n' +
            '                            успокаивает нас На физическом уровне так как именно Зелёная часть и Спектра легче всего\n' +
            '                            воспринимается глазом таким образом зелёный в психологии считаются положительным и даже\n' +
            '                            полезным Но с ним как есть любым другим активным цветом нужно знать меру',
        cardText: 'Растения фиолетовой зоны: лимонник китайский, калина давида, дикий виноград, пузыреплодник, дерен'
    }
]
