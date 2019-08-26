import { Component } from '@angular/core';
import { MyCardComponent } from '../Cards/my-card.component';
import { Orientation } from 'src/app/models/my-card.model';
import { CardColor, CardNumber } from 'src/app/models/Card.model';

@Component({
    selector: 'my-hand',
    templateUrl: './my-hand.component.html'
})
export class MyHandComponent {
    myName: string = "player name";
    showHand: boolean = true;
    myCards: MyCardComponent[] = [
        {
            orientation: Orientation.DOWN,
            color: CardColor.RED,
            number: CardNumber.THREE
        },
        {
            orientation: Orientation.UP,
            color: CardColor.BLUE,
            number: CardNumber.FIVE
        }
    ];

    toggleHand(): void {
        this.showHand = !this.showHand;
    }
}