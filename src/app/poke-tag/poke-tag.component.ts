import { Component, Input } from '@angular/core';

@Component({
  selector: 'poke-tag',
  templateUrl: './poke-tag.component.html',
  styleUrls: ['./poke-tag.component.css']
})
export class PokeTagComponent {
  @Input() type: string = "";
}
