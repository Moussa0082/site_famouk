import { Component } from '@angular/core';
import { CounterDirective } from '../../../../directives/counter.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-counter5',
  imports: [CounterDirective,RouterLink],
  templateUrl: './counter5.component.html',
  styles: ``
})
export class Counter5Component {

}
