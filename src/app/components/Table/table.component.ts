import { Component, OnInit } from "@angular/core";
import { PlayAreaComponent } from "./play-area.component";
import { GarbageAreaComponent } from "./garbage-area.component";
import { GameInfoComponent } from "./game-info.component";
import { MyHandComponent } from "../Hands/my-hand.component";
import { TheirHandComponent } from "../Hands/their-hand.component";
import { ICard } from "src/app/models/Card/card.model";
import { CardColor, CardNumber } from "../../models/Card/card.model";
import { CardOrientation } from "../../models/Card/my-card.model";
import { IMyCard } from 'src/app/models/Card/my-card.model';
import { ITheirHand } from 'src/app/models/Hand/their-hand.model';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: "hanabi-table",
  templateUrl: "./table.component.html"
})
export class TableComponent implements OnInit {

  playArea: PlayAreaComponent;
  discardedCards: ICard[] = [];
  gameInfo: GameInfoComponent;
  myHand: ICard[];
  theirHands: ITheirHand[];
  deck: ICard[];

  ngOnInit(): void {
    this.deck = this.generateNewDeck(false);
    this.myHand = this.initializeHand(5);
    this.theirHands = [
      {
        theirCards: this.initializeHand(5),
        theirName: "Vika"
      }
    ]
  }

  hasDiscardedCards() : boolean {
    return (this.discardedCards.length > 0);
  }


  //Methods that will be deleted later. Writing for functionality testing
  generateNewDeck(useRainbow: boolean): ICard[] {
    return Object.keys(CardColor).filter(color => (color !== "RAINBOW" || useRainbow)).flatMap(color => {
      return Object.keys(CardNumber).filter(number => number.length > 1)
        .flatMap(number => {
          let cards: ICard[] = [];

          let i = 2;
          if(number === "ONE")
            i = 3;
          if(number === "FIVE")
            i = 1;
          
          for(;i > 0; i--){
            cards.push({
              cardNumber: CardNumber[number],
              cardColor: CardColor[color]
            });
          }
          return cards;
        })
    });
  }

  initializeHand(size: number) : ICard[] {
    let myNewHand: ICard[] = [];
    for(let i = 0; i < size; i++){
      let index = Math.floor(Math.random() * this.deck.length);
      let removedCard: ICard = this.deck.splice(index, 1)[0];
      myNewHand.push(removedCard);
    }
    return myNewHand;
  }


}
