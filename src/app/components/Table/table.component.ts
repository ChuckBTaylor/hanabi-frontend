import { Component } from "@angular/core";
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

@Component({
  selector: "hanabi-table",
  templateUrl: "./table.component.html"
})
export class TableComponent {

  playArea: PlayAreaComponent;
  garbageArea: ICard[] = [
    {
        cardColor: CardColor.WHITE,
        cardNumber: CardNumber.TWO
    },
    {
        cardColor: CardColor.BLUE,
        cardNumber: CardNumber.FIVE
    }
  ];
  gameInfo: GameInfoComponent;
  myHand: ICard[] = [
    {
        cardColor: CardColor.RED,
        cardNumber: CardNumber.FOUR
    },
    {
        cardColor: CardColor.BLUE,
        cardNumber: CardNumber.ONE
    },
    {
        cardColor: CardColor.YELLOW,
        cardNumber: CardNumber.ONE
    },
    {
        cardColor: CardColor.YELLOW,
        cardNumber: CardNumber.ONE
    },
    {
        cardColor: CardColor.GREEN,
        cardNumber: CardNumber.ONE
    }
];
  theirHands: ITheirHand[] = [
    {
      theirName: "Vika",
      theirCards: [
        {
          cardNumber: CardNumber.FIVE,
          cardColor: CardColor.GREEN
        },
        {
          cardColor: CardColor.RED,
          cardNumber: CardNumber.ONE
        },
        {
          cardColor: CardColor.WHITE,
          cardNumber: CardNumber.THREE
        },
        {
          cardColor: CardColor.YELLOW,
          cardNumber: CardNumber.THREE
        },
        {
          cardColor: CardColor.BLUE,
          cardNumber: CardNumber.ONE
        }
      ]
    }
  ];
  deck: ICard[] = [
    {
      cardNumber: CardNumber.TWO,
      cardColor: CardColor.RED
    }
  ];
}
