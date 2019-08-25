import { Component } from '@angular/core';
import { MyCardComponent } from '../Cards/my-card.component';

@Component({
    selector: 'my-hand',
    templateUrl: './my-hand.component.html'
})
export class MyHandComponent {
    myName: string = "player name";
    showHand: boolean = true;
    myCards: MyCardComponent[] = [
        {
            orientation: "UP"
        },
        {
            orientation: "DOWN"
        }
    ];

    toggleHand(): void {
        this.showHand = !this.showHand;
    }
}