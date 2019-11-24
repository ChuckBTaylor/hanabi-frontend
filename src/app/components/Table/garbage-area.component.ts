import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { ICard } from 'src/app/models/Card/card.model';

@Component({
    selector: 'garbage-area',
    templateUrl: "./garbage-area.component.html"
})
export class GarbageAreaComponent implements OnChanges {
    @Input() discardedCards: ICard[] = [];

    ngOnChanges(): void {
        console.log("From onchanges: " + this.discardedCards);
    }
}