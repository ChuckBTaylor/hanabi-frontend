import { ICard } from './card.model';

export enum CardOrientation {
    UP = "UP",
    DOWN = "DOWN"
}

export interface IMyCard extends ICard {
    cardOrientation: CardOrientation
}