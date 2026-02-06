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
import { PageScrollComponent } from "../../layout/page-scroll/page-scroll.component";
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index-single-4',
  imports: [ScrollToModule, Home4Component, CommonModule, About4Component, Causes4Component, LatestEventComponent, TestimonialComponent, VolunteerComponent, NewsblogComponent, Footer4Component, PageScrollComponent, RouterLink],
  templateUrl: './index-single-4.component.html',
  styles: ``,
  providers: [ScrollToService],

})
export class IndexSingle4Component {
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
