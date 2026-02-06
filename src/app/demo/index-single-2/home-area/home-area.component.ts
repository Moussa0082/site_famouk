import { Component } from '@angular/core';
import { GsapRevealDirective } from '../../../directives/gsap-reveal.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-area',
  imports: [GsapRevealDirective,RouterLink],
  templateUrl: './home-area.component.html',
  styles: ``
})
export class HomeAreaComponent {

}
