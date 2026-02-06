import { Component } from '@angular/core';
import { GsapRevealDirective } from '../../../../directives/gsap-reveal.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [GsapRevealDirective,RouterLink],
  templateUrl: './about.component.html',
  styles: ``,
  styleUrl: './about.component.scss'

})
export class AboutComponent {

}
