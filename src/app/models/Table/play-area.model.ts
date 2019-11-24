import { ICard } from '../Card/card.model';

export interface IPlayArea{
  redStack: ICard[];
  whiteStack: ICard[];
  yellowStack: ICard[];
  blueStack: ICard[];
  greenStack: ICard[];
  rainbowStack: ICard[];
}