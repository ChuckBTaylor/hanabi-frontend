import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHandComponent } from './components/Hand/my-hand.component';
import { MyCardComponent } from './components/Card/my-card.component';
import { TheirCardComponent } from './components/Card/their-card.component';
import { TheirHandComponent } from './components/Hand/their-hand.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHandComponent,
    MyCardComponent,
    TheirCardComponent,
    TheirHandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
