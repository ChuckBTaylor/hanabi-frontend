import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHandComponent } from './components/Hands/my-hand.component';
import { MyCardComponent } from './components/Cards/my-card.component';
import { TheirCardComponent } from './components/Cards/their-card.component';
import { TheirHandComponent } from './components/Hands/their-hand.component';
import { TableComponent } from './components/Table/table.component';
import { PlayAreaComponent } from './components/Table/play-area.component';
import { GarbageAreaComponent } from './components/Table/garbage-area.component';
import { GameInfoComponent } from './components/Table/game-info.component';
import { ClueAreaComponent } from './components/Table/clue-area.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHandComponent,
    MyCardComponent,
    TheirCardComponent,
    TheirHandComponent,
    TableComponent,
    PlayAreaComponent,
    GarbageAreaComponent,
    GameInfoComponent,
    ClueAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
