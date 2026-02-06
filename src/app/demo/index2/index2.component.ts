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
import { FooterComponent } from "../../layout/footer/footer.component";
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { MobileSidebarComponent } from "../../component/mobile-sidebar/mobile-sidebar.component";
import { PageScrollComponent } from "../../layout/page-scroll/page-scroll.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index2',
  imports: [NavbarComponent,RouterLink, AboutUsAreaComponent, HelpUsComponent, HomeAreaComponent, MarqueeComponent, OurBlogComponent, SafeDonationComponent, ServiceAreaComponent, TestimonialComponent, ContactUsComponent, MobileSidebarComponent, PageScrollComponent],
  templateUrl: './index2.component.html',
  styles: ``
})
export class Index2Component {
  isMenuOpen = false;
  constructor(private el: ElementRef) {}

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
}
