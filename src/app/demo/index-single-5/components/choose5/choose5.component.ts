import { Component } from '@angular/core';
import { GsapRevealDirective } from '../../../../directives/gsap-reveal.directive';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-choose5',
  imports: [GsapRevealDirective, CarouselModule,RouterLink],
  templateUrl: './choose5.component.html',
  styles: ``
})
export class Choose5Component {
  chooseSlider:OwlOptions = {
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  }
}
