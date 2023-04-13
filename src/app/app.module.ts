import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeCardTitleComponent } from './poke-card-title/poke-card-title.component';
import { PokeCardTagComponent } from './poke-card-tag/poke-card-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeCardTitleComponent,
    PokeCardTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
