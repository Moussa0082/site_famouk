import { Component } from '@angular/core';
import { CounterDirective } from '../../../../directives/counter.directive';

@Component({
  selector: 'app-counter-area',
  imports: [CounterDirective],
  templateUrl: './counter-area.component.html',
  styleUrl: './counter-area.component.scss'
})
export class CounterAreaComponent {
}
