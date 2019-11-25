import { CardColor, CardNumber } from '../Card/card.model';

export interface IGivenClue {
  color?: CardColor
  number?: CardNumber
  name: string
}