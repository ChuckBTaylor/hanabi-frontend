import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { ITheirHand } from 'src/app/models/Hand/their-hand.model';
import { ICard, CardColor, CardNumber } from 'src/app/models/Card/card.model';
import { IGivenClue } from 'src/app/models/Action/IGivenClue.model';

@Component({
  selector: 'clue-area',
  templateUrl: './clue-area.component.html'
})
export class ClueAreaComponent implements OnInit, OnChanges {

  @Input() theirHands: ITheirHand[] = [];
  givingClue: boolean = true;
  confirmingClue: boolean = false;
  pendingClue: IGivenClue;
  @Output() sendClue: EventEmitter<IGivenClue> = new EventEmitter<IGivenClue>();

  ngOnInit(): void {
    console.log(this.pendingClue);

  }

  ngOnChanges(): void {
    console.log(this.pendingClue);

  }

  toggleGivingClue(): void {
    this.givingClue = !this.givingClue;
  }

  getEligibleColors(hand: ITheirHand): CardColor[] {
    let handColors: CardColor[] = hand.theirCards.map(card => card.cardColor).sort();
    let clueColors: CardColor[] = new Array();
    for (let i = 0; i < handColors.length; i++) {
      if (!clueColors.find(color => color === handColors[i]))
        clueColors.push(handColors[i]);
    }
    return clueColors;
  }

  getEligibleNumbers(hand: ITheirHand): CardNumber[] {
    let handNumbers: CardNumber[] = hand.theirCards.map(card => card.cardNumber).sort();
    let clueNumbers: CardNumber[] = new Array();
    for (let i = 0; i < handNumbers.length; i++) {
      if (!clueNumbers.find(number => number === handNumbers[i]))
        clueNumbers.push(handNumbers[i]);
    }
    return clueNumbers;
  }

  confirmClue(clue: IGivenClue): void {
    this.confirmingClue = true;
    this.pendingClue = clue;
  }

  acceptClue(): void {
    this.sendClue.emit(this.pendingClue);
    this.pendingClue = null;
    this.confirmingClue = false;
  }

  rejectClue(): void {
    this.pendingClue = null;
    this.confirmingClue = false;
  }
}