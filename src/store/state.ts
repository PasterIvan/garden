import plant1 from '../components/c2-Body/b1-Main/m4-Cards/img/plant1.svg'
import plant2 from '../components/c2-Body/b1-Main/m4-Cards/img/plant2.svg'
import shalfei from './img/plants/shalfei.jpg'
import жимолость from './img/plants/жимолость 1.jpg'
import тимьян from './img/plants/Тимьян.jpg'
import кровохлебка from './img/plants/Кровохлебка.jpg'
import слива from './img/plants/слива2.jpg'

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
    { idCard: 'r1', img: plant2, title: 'Малина', isDone: false },
    { idCard: 'r2', img: plant1, title: 'Рябина', isDone: false },
    { idCard: 'r3', img: plant1, title: 'Вишня', isDone: false },
  ],
  [zoneOrange]: [
    { idCard: 'o1', img: plant2, title: 'Яблоня', isDone: false },
    { idCard: 'o2', img: plant2, title: 'Липа', isDone: false },
    { idCard: 'o3', img: plant1, title: 'Жасмин', isDone: false },
  ],
  [zoneGreen]: [{ idCard: 'g1', img: plant2, title: 'Крыжовник', isDone: false }],
  [zoneBlue]: [
    { idCard: 'b1', img: plant1, title: 'Шелковица', isDone: false },
    { idCard: 'b2', img: plant1, title: 'Лен', isDone: false },
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
