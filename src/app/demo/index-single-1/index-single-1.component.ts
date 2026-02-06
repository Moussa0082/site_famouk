import { Component, ElementRef, HostListener } from '@angular/core';
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
import { SubscribeComponent } from "../../component/subscribe/subscribe.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index-single-1',
  imports: [SlickCarouselModule, ScrollToModule, CommonModule,RouterLink, AboutComponent, CauseComponent, EventComponent, TestimonialComponent, GallaryComponent, TeamAreaComponent, BlogAreaComponent, SubscribeComponent],
  templateUrl: './index-single-1.component.html',
  styles: ``,
  providers: [ScrollToService],

})
export class IndexSingle1Component {
  sliderConfig = {
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
    arrows: true,
    dots: false,
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
  isMenuOpen = false;
  constructor(private el: ElementRef) { }
  activeLink: string = 'about'
  isSticky = false
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.scrollY;
    const header = this.el.nativeElement.querySelector('.header-area');

    if (scrollPosition < 1) {
      header.classList.remove('sticky');
    } else {
      header.classList.add('sticky');
    }
  }

  setActiveLink(link: string): void {
    this.activeLink = link
  }
}
