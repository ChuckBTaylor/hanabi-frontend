import { Component } from '@angular/core';
import { MyCard } from 'src/app/models/my-card.model';

@Component({
    selector: 'my-card',
    templateUrl: './my-card.component.html'
})
export class MyCardComponent extends MyCard{
}