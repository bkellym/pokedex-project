import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeCardTitleComponent } from './poke-card/poke-card-title/poke-card-title.component';
import { PokeCardTagComponent } from './poke-card/poke-card-tag/poke-card-tag.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { PokeContainerComponent } from './poke-container/poke-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeCardTitleComponent,
    PokeCardTagComponent,
    PokeCardComponent,
    PokeContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
