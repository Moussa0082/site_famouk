import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-team-area',
  imports: [CarouselModule,RouterLink],
  templateUrl: './team-area.component.html',
  styles: ``
})
export class TeamAreaComponent {
  teamArea:OwlOptions = {
    loop: true,
    margin: 30,
    // responsiveClass: true,
    items: 4,
    nav: true,
    dots: false,
    navText : ['<img src="assets/img/icons/vl-tem-left-arrow-1.1.svg" alt="">','<img src="assets/img/icons/vl-team-right-1.2.svg" alt="">'],

    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 4,
      }
    }
  }
}
