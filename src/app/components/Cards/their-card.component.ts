import { Component, Input } from '@angular/core';
import { ITheirCard } from 'src/app/models/Card/their-card.model';
import { CardNumber, CardColor } from 'src/app/models/Card/card.model';

@Component({
  selector: 'their-card',
  templateUrl: './their-card.component.html'
})
export class TheirCardComponent implements ITheirCard {

  @Input() cardNumber: CardNumber;
  @Input() cardColor: CardColor;

  getDisplayColor(color: string): string {
    if (color === CardColor.WHITE)
      color = "BLACK";
    else if (color === CardColor.RAINBOW)
      color = "PURPLE";
    return color;
  }

}