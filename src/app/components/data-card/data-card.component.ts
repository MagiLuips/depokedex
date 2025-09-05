import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonSummarized } from '../../interfaces/pokemon-list';

@Component({
  selector: 'app-data-card',
  standalone: true,
  imports: [],
  templateUrl: './data-card.component.html',
  styleUrl: './data-card.component.css',
})
export class DataCardComponent {
  @Input() pokemon!: PokemonSummarized;
  @Output() clicked = new EventEmitter<number>();
}
