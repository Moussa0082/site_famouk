import { Component } from '@angular/core';
import { GsapRevealDirective } from '../../../directives/gsap-reveal.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us-area',
  imports: [GsapRevealDirective,RouterLink],
  templateUrl: './about-us-area.component.html',
  styles: ``
})
export class AboutUsAreaComponent {

}
