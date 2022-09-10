import shalfei from './img/plants/shalfei.jpg'
import жимолость from 'store/img/plants/жимолость.jpg'
import тимьян from './img/plants/Тимьян.jpg'
import кровохлебка from './img/plants/Кровохлебка.jpg'
import слива from './img/plants/слива2.jpg'
import малина from './img/plants/малина.jpg'
import рябина from './img/plants/Рябина.jpg'
import вишня from './img/plants/виш.jpg'
import яблоня from './img/plants/ябл.jpg'
import липа from './img/plants/Липа.jpg'
import жасмин from './img/plants/Жасмин.jpg'
import черемуха from './img/plants/Черемуха.jpg'
import крыжовник from './img/plants/крыжовник.jpg'
import шелковица from './img/plants/Шелковица.jpg'
import лен from './img/plants/лен.jpg'

export type ZonesType = 'red' | 'orange' | 'green' | 'blue' | 'violet'

export const themes: ZonesType[] = ['red', 'orange', 'green', 'blue', 'violet']

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

const zoneRed = 'red'
const zoneOrange = 'orange'
const zoneGreen = 'green'
const zoneBlue = 'blue'
const zoneViolet = 'violet'

export const cards: CardsType = {
  [zoneRed]: [
    { idCard: 'r1', img: малина, title: 'Малина', isDone: false },
    { idCard: 'r2', img: рябина, title: 'Рябина', isDone: false },
    { idCard: 'r3', img: вишня, title: 'Вишня', isDone: false },
  ],
  [zoneOrange]: [
    { idCard: 'o1', img: яблоня, title: 'Яблоня', isDone: false },
    { idCard: 'o2', img: липа, title: 'Липа', isDone: false },
    { idCard: 'o3', img: жасмин, title: 'Жасмин', isDone: false },
    { idCard: 'o4', img: черемуха, title: 'Черемуха', isDone: false },
  ],
  [zoneGreen]: [{ idCard: 'g1', img: крыжовник, title: 'Крыжовник', isDone: false }],
  [zoneBlue]: [
    { idCard: 'b1', img: шелковица, title: 'Шелковица', isDone: false },
    { idCard: 'b2', img: лен, title: 'Лен', isDone: false },
  ],
  [zoneViolet]: [
    { idCard: 'v1', img: слива, title: 'Слива', isDone: false },
    { idCard: 'v2', img: кровохлебка, title: 'Кровохлебка', isDone: false },
    { idCard: 'v3', img: тимьян, title: 'Тимьян', isDone: false },
    { idCard: 'v4', img: жимолость, title: 'Жимолость', isDone: false },
    { idCard: 'v5', img: shalfei, title: 'Шалфей', isDone: false },
  ],
}

export const zones: Array<ZoneType> = [
  {
    idZone: zoneRed,
    textButton: ' Красная зона - в ней распологпается зона тихого отдыха с фонтаном и лавочками',
    title: 'ПЕРЕЧЕНЬ РАСТЕНИЙ В КРАСНОЙ ЗОНЕ',
    text: 'Красная зона - Психологи утверждают, что огненный цвет прекрасно служит для выделения, привлечения внимания, он указывает, на что следует посмотреть в первую очередь. Кроме того, он является символом красоты, любви, энергии.',
    cardText: 'Растения красной зоны: малина, рябина, вишня.',
  },
  {
    idZone: zoneOrange,
    textButton:
      ' Оранжево-желтая зона - в ней распологпается зона тихого отдыха с фонтаном и лавочками',
    title: 'ПЕРЕЧЕНЬ РАСТЕНИЙ В ОРАНЖЕВО-ЖЕЛТОЙ ЗОНЕ',
    text: 'Оранжево-жёлтая зона - во всем мире (и до недавнего времени в нашей стране) желтые цветы означают счастье, богатство, оптимизм, дружбу, гордость и интеллект.',
    cardText: 'Растения оранжево-желтой зоны: яблоня, липа, жасмин.',
  },
  {
    idZone: zoneGreen,
    textButton: ' Зеленая зона - в ней распологпается зона тихого отдыха с фонтаном и лавочками',
    title: 'ПЕРЕЧЕНЬ РАСТЕНИЙ В ЗЕЛЕНОЙ ЗОНЕ',
    text: 'Зеленая зона - цвет самой жизни, символ природы и экологии, гармонии и равновесия. Этот цвет ассоциируется с возрождением, как весна, когда все оживает и мир, преображается. Он успокаивает нас на физическом уровне, так как именно зеленая часть спектра легче всего воспринимается глазом.',
    cardText: 'Растения зеленой зоны: крыжовник.',
  },
  {
    idZone: zoneBlue,
    textButton:
      ' Сине-голубая зона - в ней распологпается зона тихого отдыха с фонтаном и лавочками',
    title: 'ПЕРЕЧЕНЬ РАСТЕНИЙ В СИНЕ-ГОЛУБОЙ ЗОНЕ',
    text: 'Сине-голубая зона - Синий цвет обладает успокаивающим действием, умиротворяет. Он помогает человеку избавиться от агрессии, бессонницы и отрицательных мыслей. Это гармонизация энергии, рекомендуется к использованию в тех местах, где от человека ожидают повышенной активности, внимания и при этом эмоционального расслабления.',
    cardText: 'Растения сине-голубой зоны: шелковица, лен.',
  },
  {
    idZone: zoneViolet,
    textButton: 'Фиолетовая зона - в ней распологпается зона тихого отдыха с фонтаном и лавочками',
    title: 'ПЕРЕЧЕНЬ РАСТЕНИЙ В ФИОЛЕТОВОЙ ЗОНЕ',
    text: 'Фиолетовая зона - это как бы угасший красный — такой красный, на который набросили синий покров тьмы. Главное его свойство — двойственность воздействия на психику: он и возбуждает, и угнетает, он соединяет эмоциональный эффект красного и синего цветов: одновременно притягивающий и отталкивающий, полный жизни и возбуждающий тоску, и грусть. (С. Рубинштейн)',
    cardText: 'Растения фиолетовой зоны: слива, кровохлебка, тимьян, жимолость, шалфей.',
  },
]
