import { Component } from '@angular/core';
import { CounterDirective } from '../../../../directives/counter.directive';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-testi-area',
  imports: [CounterDirective, SlickCarouselModule],
  templateUrl: './testi-area.component.html',
  styleUrl: './testi-area.component.scss'
})
export class TestiAreaComponent {
  sliderForConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav1'
  };

  sliderNavConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for1',
    dots: true,
    arrows: true,
    focusOnSelect: true,
    prevArrow: '<span class="smarrow smarrow2 abarow arrow-right"><i class="fa-solid fa-angle-right"></i></span>',
    nextArrow: '<span class="smarrow smarrow2 abarow arrow-lft"><i class="fa-solid fa-angle-left"></i></span>'
  };
}
