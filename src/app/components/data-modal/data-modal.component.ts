import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonData } from '../../interfaces/pokemon-data';

@Component({
  selector: 'app-data-modal',
  standalone: true,
  imports: [],
  templateUrl: './data-modal.component.html',
  styleUrl: './data-modal.component.css',
})
export class DataModalComponent {
  @Input() pokemon?: PokemonData;
  @Output() closed = new EventEmitter();
}
