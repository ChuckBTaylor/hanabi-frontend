import { Component, Input } from "@angular/core";
import { IPlayArea } from 'src/app/models/Table/play-area.model';
import { ICard, CardColor, CardNumber } from 'src/app/models/Card/card.model';
import { IcuPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
    selector: 'play-area',
    templateUrl: "./play-area.component.html"
})
export class PlayAreaComponent implements IPlayArea {

    redStack: ICard[] = [{
        cardNumber: CardNumber.ONE,
        cardColor: CardColor.RED
    }];
    whiteStack: ICard[] = [];
    yellowStack: ICard[] = [];
    blueStack: ICard[] = [];
    greenStack: ICard[] = [];
    rainbowStack: ICard[] = [];
    @Input() showRainbowStack: boolean;

    playCard(card: ICard): boolean {
        let stack: ICard[] = this.getProperStack(card.cardColor);
        if(card.cardNumber !== stack.length + 1)
            return false;
        stack.push(card);
        return true;
    }

    getProperStack(color: CardColor): ICard[] {
        switch (color) {
            case CardColor.RED:
                return this.redStack;
            case CardColor.WHITE:
                return this.whiteStack;
            case CardColor.BLUE:
                return this.blueStack;
            case CardColor.GREEN:
                return this.greenStack;
            case CardColor.YELLOW:
                return this.yellowStack;
            case CardColor.RAINBOW:
                return this.rainbowStack;
        }
    }
}