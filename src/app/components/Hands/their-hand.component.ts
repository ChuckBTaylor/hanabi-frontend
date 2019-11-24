import { Component, Input } from '@angular/core';
import { CardNumber, CardColor } from 'src/app/models/Card/card.model';
import { TheirCardComponent } from '../Cards/their-card.component';
import { ITheirHand } from 'src/app/models/Hand/their-hand.model';

@Component({
    selector: 'their-hand',
    templateUrl: './their-hand.component.html'
})
export class TheirHandComponent implements ITheirHand {

    @Input() theirName: string;
    @Input() theirCards: TheirCardComponent[];

}