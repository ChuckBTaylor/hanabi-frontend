import { Component } from "@angular/core";
import { PlayAreaComponent } from './play-area.component';
import { GarbageAreaComponent } from './garbage-area.component';
import { GameInfoComponent } from './game-info.component';
import { MyHandComponent } from '../Hands/my-hand.component';
import { TheirHandComponent } from '../Hands/their-hand.component';
import { ICard } from 'src/app/models/Card/card.model';

@Component({
    selector: 'hanabi-table',
    templateUrl: './table.component.html'
})
export class TableComponent {

    playArea: PlayAreaComponent;
    garbageAre: GarbageAreaComponent;
    gameInfo: GameInfoComponent;
    myHand: MyHandComponent;
    theirHands: TheirHandComponent[];
    deck: ICard[];

}