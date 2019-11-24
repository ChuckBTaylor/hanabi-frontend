import { Component } from '@angular/core';
import { CardNumber, CardColor } from 'src/app/models/Card/card.model';
import { TheirCardComponent } from '../Cards/their-card.component';

@Component({
    selector: 'their-hand',
    templateUrl: './their-hand.component.html'
})
export class TheirHandComponent {

    theirName: string = "Their Name";
    theirCards: TheirCardComponent[] = [
       {
           cardNumber: CardNumber.FIVE,
           cardColor: CardColor.GREEN
       },
       {
           cardColor: CardColor.RED,
           cardNumber: CardNumber.TWO
       },
       {
           cardColor: CardColor.RED,
           cardNumber: CardNumber.THREE
       }
    ];

}