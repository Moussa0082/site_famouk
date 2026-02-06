import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index3-testimonial',
  imports: [SlickCarouselModule,RouterLink],
  templateUrl: './index3-testimonial.component.html',
  styles: ``
})
export class Index3TestimonialComponent {
  sliderForConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    loop: true,
    centerMode: true,
    focusOnSelect: true,
    // arrows: false,
    asNavFor: '.slider-testimonial'
  };

  sliderNavConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (".testimonial-prev-arrow"),
    nextArrow: (".testimonial-next-arrow"),
    fade: true,
    loop: true,
    asNavFor: ".testimonial-nav",
  };
}