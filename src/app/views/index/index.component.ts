import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AboutComponent } from "./components/about/about.component";
import { CauseComponent } from "./components/cause/cause.component";
import { EventComponent } from "./components/event/event.component";
import { TestimonialComponent } from "./components/testimonial/testimonial.component";
import { GallaryComponent } from "./components/gallary/gallary.component";
import { TeamAreaComponent } from "./components/team-area/team-area.component";
import { BlogAreaComponent } from "./components/blog-area/blog-area.component";
import { CommonModule } from '@angular/common';
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [SlickCarouselModule,ScrollToModule ,CommonModule,AboutComponent, CauseComponent, EventComponent, TestimonialComponent, GallaryComponent, TeamAreaComponent, BlogAreaComponent,RouterLink],
  templateUrl: './index.component.html',
  styles: ``,
  providers: [ScrollToService],

})
export class IndexComponent {
  sliderConfig ={
      draggable: true,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      fade: true,
      cssEase: 'ease-in-out',
      touchThreshold: 100,
      arrows:true,
      dots:false,
      prevArrow: ('.prev-arow'),
      nextArrow: ('.next-arow'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  }

  
}
