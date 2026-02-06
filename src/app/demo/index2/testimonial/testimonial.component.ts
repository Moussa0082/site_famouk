import { Component } from '@angular/core';
import { GsapRevealDirective } from '../../../directives/gsap-reveal.directive';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-testimonial',
  imports: [GsapRevealDirective,CarouselModule,RouterLink],
  templateUrl: './testimonial.component.html',
  styles: ``
})
export class TestimonialComponent {
testimonial:OwlOptions ={
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
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
}
}
