import { Component, ElementRef, HostListener } from '@angular/core';
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { Home4Component } from "./components/home4/home4.component";
import { About4Component } from "./components/about4/about4.component";
import { Causes4Component } from "./components/causes4/causes4.component";
import { LatestEventComponent } from "./components/latest-event/latest-event.component";
import { TestimonialComponent } from "./components/testimonial/testimonial.component";
import { VolunteerComponent } from "./components/volunteer/volunteer.component";
import { NewsblogComponent } from "./components/newsblog/newsblog.component";
import { Footer4Component } from "./components/footer4/footer4.component";
import { MobileSidebarComponent } from "../../component/mobile-sidebar/mobile-sidebar.component";
import { PageScrollComponent } from "../../layout/page-scroll/page-scroll.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index4',
  imports: [NavbarComponent, RouterLink,Home4Component, About4Component, Causes4Component, LatestEventComponent, TestimonialComponent, VolunteerComponent, NewsblogComponent, Footer4Component, MobileSidebarComponent, PageScrollComponent],
  templateUrl: './index4.component.html',
  styles: ``
})
export class Index4Component {
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
