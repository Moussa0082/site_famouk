import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial',
  imports: [CarouselModule],
  templateUrl: './testimonial.component.html',
  styles: ``
})
export class TestimonialComponent {
  customOptions: OwlOptions ={
    loop:true,
    margin:30,
    // responsiveClass:true,
    items:3,
    nav: true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    navText : ['<img src="assets/img/icons/vl-arrow-left-1.1.svg" alt="">','<img src="assets/img/icons/vl-angle-right-1.2.svg" alt="">'],
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
