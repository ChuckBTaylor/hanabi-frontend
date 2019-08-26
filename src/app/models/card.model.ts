export const enum CardColor {
    RED = "RED",
    YELLOW = "YELLOW",
    BLUE = "BLUE",
    WHITE = "WHITE",
    GREEN = "GREEN",
    RAINBOW = "RAINBOW"
}

export const enum CardNumber {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5
}

export class Card {
    color: CardColor;
    number: CardNumber;
}
