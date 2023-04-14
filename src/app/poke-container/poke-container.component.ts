import { Component } from '@angular/core';

@Component({
  selector: 'poke-container',
  templateUrl: './poke-container.component.html',
  styleUrls: ['./poke-container.component.css']
})
export class PokeContainerComponent {
  types: string[] = ["grass", "poison"];
}
