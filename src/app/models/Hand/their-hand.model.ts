import { ITheirCard } from '../Card/their-card.model';

export interface ITheirHand {
  theirCards: ITheirCard[];
  theirName: string;
}