import { Component, ElementRef, HostListener } from '@angular/core';
import { AboutUsAreaComponent } from './about-us-area/about-us-area.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HelpUsComponent } from './help-us/help-us.component';
import { HomeAreaComponent } from './home-area/home-area.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { SafeDonationComponent } from './safe-donation/safe-donation.component';
import { ServiceAreaComponent } from './service-area/service-area.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { MobileSidebarComponent } from "../../component/mobile-sidebar/mobile-sidebar.component";
import { PageScrollComponent } from "../../layout/page-scroll/page-scroll.component";
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index-single-2',
  imports: [AboutUsAreaComponent, RouterLink, CommonModule, ScrollToModule, HelpUsComponent, HomeAreaComponent, MarqueeComponent, OurBlogComponent, SafeDonationComponent, ServiceAreaComponent, TestimonialComponent, ContactUsComponent, PageScrollComponent],
  templateUrl: './index-single-2.component.html',
  styles: ``,
  providers: [ScrollToService],

})
export class IndexSingle2Component {
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
