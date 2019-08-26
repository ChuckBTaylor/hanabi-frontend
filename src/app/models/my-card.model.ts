import { Card } from './card.model';

export enum Orientation {
    UP = "UP",
    DOWN = "DOWN"
}

export class MyCard extends Card {
    orientation: Orientation;
}