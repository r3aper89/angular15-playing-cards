import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardDeckComponent } from './components/card-deck/card-deck.component';
import { PlayerHandComponent } from './components/player-hand/player-hand.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardDeckComponent,
    PlayerHandComponent,
    NavHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
