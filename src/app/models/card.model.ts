export const enum Color {
    RED = "RED",
    YELLOW = "YELLOW",
    BLUE = "BLUE",
    WHITE = "WHITE",
    GREEN = "GREEN",
    RAINBOW = "RAINBOW"
}

export const enum Number {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5
}

export interface Card {
    color: Color;
    number: Number;
}
