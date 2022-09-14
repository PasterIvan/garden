import Зямина from './img/Зямина.png'
import Максимова from './img/Максимова.png'
import Пищугина from './img/Пищугина.png'
import Манцурова from './img/Манцурова.png'
import Андреева from './img/Андреева.png'
import Алифанов from './img/Алифанов.png'

export type WinnerType = {
  id: string
  certificate: string
}
export const winners: WinnerType[] = [
  { id: 'Зямина', certificate: Зямина },
  { id: 'Максимова', certificate: Максимова },
  { id: 'Пищугина', certificate: Пищугина },
  { id: 'Манцурова', certificate: Манцурова },
  { id: 'Андреева', certificate: Андреева },
  { id: 'Алифанов', certificate: Алифанов },
]
