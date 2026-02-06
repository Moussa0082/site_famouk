import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { GsapRevealDirective } from '../../../../directives/gsap-reveal.directive';
import { CounterDirective } from '../../../../directives/counter.directive';

@Component({
  selector: 'app-testimonial',
  imports: [SlickCarouselModule,GsapRevealDirective,CounterDirective],
  templateUrl: './testimonial.component.html',
  styles: ``
})
export class TestimonialComponent {
  sliderForConfig = {
    slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
  };

  sliderNavConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    arrows: true,
    focusOnSelect: true,
    prevArrow:'<span class="smarrow abarow arrow-right"><i class="fa-solid fa-angle-right"></i></span>',
    nextArrow:'<span class="smarrow abarow arrow-lft"><i class="fa-solid fa-angle-left"></i></span>',
  };
}
