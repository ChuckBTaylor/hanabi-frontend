import { Component, Input } from '@angular/core';
import { CardOrientation, IMyCard } from 'src/app/models/Card/my-card.model';
import { CardNumber, CardColor } from 'src/app/models/Card/card.model';

@Component({
    selector: 'my-card',
    templateUrl: './my-card.component.html'
})
export class MyCardComponent implements IMyCard {

    cardNumber: CardNumber;
    cardColor: CardColor
    @Input() cardOrientation: CardOrientation;
}