import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { MyCardComponent } from '../Cards/my-card.component';
import { CardNumber, CardColor, ICard } from 'src/app/models/Card/card.model';
import { CardOrientation, IMyCard } from 'src/app/models/Card/my-card.model';

@Component({
    selector: 'my-hand',
    templateUrl: './my-hand.component.html'
})
export class MyHandComponent implements OnInit, OnChanges {
    myName: string = "player name";
    showHand: boolean = true;
    @Input() myCards: IMyCard[] = [];
    myTurn: boolean = true;
    @Output() playCard: EventEmitter<ICard> = new EventEmitter<ICard>();
    @Output() discardCard: EventEmitter<ICard> = new EventEmitter<ICard>();

    ngOnInit(): void {
        this.turnAllCardsUp();
        console.log(this.myCards);
    };

    ngOnChanges(): void {
        this.turnAllCardsUp();
        console.log(this.myCards);
    };

    toggleHand(): void {
        this.showHand = !this.showHand;
    };

    playCardClick(card: ICard): void {
        this.playCard.emit(card);
    };

    discardCardClick(card: ICard) {
        this.discardCard.emit(card);
    };

    rotateCard(i: number): void {
        let card: MyCardComponent = this.myCards[i];
        switch (card.cardOrientation) {
            case CardOrientation.UP:
                card.cardOrientation = CardOrientation.RIGHT;
                break;
            case CardOrientation.RIGHT:
                card.cardOrientation = CardOrientation.DOWN;
                break;
            case CardOrientation.DOWN:
                card.cardOrientation = CardOrientation.LEFT;
                break;
            case CardOrientation.LEFT:
                card.cardOrientation = CardOrientation.UP;
                break;
        }
    };

    moveCard(i: number): void {
        let newPosition: string = prompt("Move card to which position? (1-" + this.myCards.length + ")");
        if (newPosition === null)
            return;
        let newPositionNumber: number;
        newPositionNumber = Number.parseInt(newPosition);
        if (!newPositionNumber || newPositionNumber < 1 || newPositionNumber > this.myCards.length) {
            alert("'" + newPosition + "' is an invalid position!");
            return;
        }

        newPositionNumber -= 1;
        this.myCards.splice(newPositionNumber, 0, this.myCards.splice(i, 1)[0]);
    };

    turnAllCardsUp(): void {
        this.myCards.map(card => card.cardOrientation = CardOrientation.UP);
    }

}