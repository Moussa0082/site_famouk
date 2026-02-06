import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home4',
  imports: [SlickCarouselModule,RouterLink],
  templateUrl: './home4.component.html',
  styles: ``
})
export class Home4Component {
slickCarousel={
    dots: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed:5000,

  
}
}
