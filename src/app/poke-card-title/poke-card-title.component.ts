import { Component, Input } from '@angular/core';

@Component({
  selector: 'poke-card-title',
  templateUrl: './poke-card-title.component.html',
  styleUrls: ['./poke-card-title.component.css']
})
export class PokeCardTitleComponent {
  @Input() name: string = "";
  @Input() num: string = "0";
}
