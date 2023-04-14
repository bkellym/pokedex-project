import { Component, Input } from '@angular/core';

@Component({
  selector: 'poke-card-tag',
  templateUrl: './poke-card-tag.component.html',
  styleUrls: ['./poke-card-tag.component.css']
})
export class PokeCardTagComponent {
  @Input() type: string = "normal";
}
