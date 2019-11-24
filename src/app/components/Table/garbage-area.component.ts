import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { ICard } from 'src/app/models/Card/card.model';

@Component({
    selector: 'garbage-area',
    templateUrl: "./garbage-area.component.html"
})
export class GarbageAreaComponent implements OnInit, OnChanges {
    @Input() discardedCards: ICard[] = [];

    ngOnInit(): void {
        console.log("hi! from garbage on init")
    }

    ngOnChanges(): void {
        console.log("From onchanges: " + this.discardedCards);
    }
}