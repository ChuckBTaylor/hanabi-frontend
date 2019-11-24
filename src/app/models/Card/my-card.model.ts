import { ICard } from './card.model';

export enum CardOrientation {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

export interface IMyCard extends ICard {
    cardOrientation: CardOrientation
}