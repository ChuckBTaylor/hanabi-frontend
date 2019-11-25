import { Component, OnInit, ViewChild } from "@angular/core";
import { PlayAreaComponent } from "./play-area.component";
import { ICard } from "src/app/models/Card/card.model";
import { CardColor, CardNumber } from "../../models/Card/card.model";
import { ITheirHand } from 'src/app/models/Hand/their-hand.model';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { IcuPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { ICardAction } from 'src/app/models/Action/CardAction.model';

@Component({
  selector: "hanabi-table",
  templateUrl: "./table.component.html"
})
export class TableComponent implements OnInit {

  @ViewChild(PlayAreaComponent, { static: false }) playArea: PlayAreaComponent;
  playedCards: ICard[] = [];
  discardedCards: ICard[] = [];
  cluesRemaining: number;
  strikesRemaining: number;
  myHand: ICard[] = [];
  theirHands: ITheirHand[] = [];
  deck: ICard[] = [];
  playingWithRainbow: boolean = true;

  ngOnInit(): void {
    this.cluesRemaining = 6;
    this.strikesRemaining = 3;
    this.discardedCards = [];
    this.playedCards = [];
    this.deck = this.generateNewDeck(this.playingWithRainbow);
    this.myHand = this.initializeHand(5);
    this.theirHands = [
      {
        theirCards: this.initializeHand(5),
        theirName: "Vika"
      },
      {
        theirCards: this.initializeHand(5),
        theirName: "Kenny"
      },
      {
        theirCards: this.initializeHand(5),
        theirName: "Squeak"
      }
    ]
  };

  reset() {
    this.ngOnInit();
    this.playArea.resetStacks();
  };

  onPlayCard(action: ICardAction): void {
    console.log(action.card);
    if (!this.playArea.playCard(action.card)) {
      this.loseStrike();
    }
    this.playedCards.push(action.card);
    this.myHand.splice(action.index, 1);
    if (!!this.deck.length)
      this.myHand.push(this.drawFromDeck());
  };

  onDiscardCard(action: ICardAction): void {
    if (this.cluesRemaining < 8)
      this.cluesRemaining += 1;
    this.discardedCards.push(action.card);
    this.myHand.splice(action.index, 1);
    if (!!this.deck.length)
      this.myHand.push(this.drawFromDeck());
  };

  hasDiscardedCards(): boolean {
    return (!!this.discardedCards.length);
  }

  loseStrike(): void {
    this.strikesRemaining -= 1;
    if (this.strikesRemaining === 0) {
      alert("You've lost! New game!")
      this.reset();
    }
  };


  //Methods that will be deleted later. Writing for functionality testing
  generateNewDeck(useRainbow: boolean): ICard[] {
    return Object.keys(CardColor).filter(color => (color !== "RAINBOW" || useRainbow)).flatMap(color => {
      return Object.keys(CardNumber).filter(number => number.length > 1)
        .flatMap(number => {
          let cards: ICard[] = [];

          let i = 2;
          if (number === "ONE")
            i = 3;
          if (number === "FIVE")
            i = 1;

          for (; i > 0; i--) {
            cards.push({
              cardNumber: CardNumber[number],
              cardColor: CardColor[color]
            });
          }
          return cards;
        })
    });
  };

  initializeHand(size: number): ICard[] {
    let myNewHand: ICard[] = [];
    for (let i = 0; i < size; i++) {
      let card = this.drawFromDeck();
      myNewHand.push(card);
    }
    return myNewHand;
  };

  drawFromDeck(): ICard {
    let index = Math.floor(Math.random() * this.deck.length);
    let removedCard: ICard = this.deck.splice(index, 1)[0];
    return removedCard;
  };


}
