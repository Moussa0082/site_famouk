import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-marquee',
  imports: [CarouselModule],
  templateUrl: './marquee.component.html',
  styles: ``
})
export class MarqueeComponent {
  carouselOptions: OwlOptions = {
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 1,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  };

}
