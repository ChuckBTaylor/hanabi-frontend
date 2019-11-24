import { Component, Input } from "@angular/core";
import { IGameInfo } from 'src/app/models/Table/game-info.model';

@Component({
    selector: 'game-info',
    templateUrl: "./game-info.component.html"
})
export class GameInfoComponent implements IGameInfo {
    
    @Input() cluesRemaining: number;
    @Input() strikesRemaining: number;
}