import { Component, Input } from '@angular/core';

@Component({
  selector: 'poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})

export class PokeCardComponent {
  @Input() name: string = "";
  @Input() num: string = "";
  @Input() types: string[] = [];
}
