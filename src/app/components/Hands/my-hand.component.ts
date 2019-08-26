import { Component } from '@angular/core';
import { MyCardComponent } from '../Cards/my-card.component';
import { CardNumber, CardColor } from 'src/app/models/Card/card.model';
import { CardOrientation } from 'src/app/models/Card/my-card.model';

@Component({
    selector: 'my-hand',
    templateUrl: './my-hand.component.html'
})
export class MyHandComponent {
    myName: string = "player name";
    showHand: boolean = true;
    myCards: MyCardComponent[] = [
        {
            cardColor: CardColor.RED,
            cardNumber: CardNumber.FOUR,
            cardOrientation: CardOrientation.UP
        }       
    ];

    toggleHand(): void {
        this.showHand = !this.showHand;
    }
}