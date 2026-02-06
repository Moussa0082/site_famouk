import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-latest-event',
  imports: [CarouselModule,RouterLink],
  templateUrl: './latest-event.component.html',
  styles: ``
})
export class LatestEventComponent {
eventOption:OwlOptions ={
  loop:true,
  margin:30,
  // responsiveClass:true,
  items:3,
  nav: true,
  dots:false,
  autoplay:true,
  autoplayTimeout:3000,
  navText : ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
  responsive:{
      0:{
          items:1,
      },
      768:{
          items:2,
      },
      1000:{
        items:3,
    }
  }
}
}
