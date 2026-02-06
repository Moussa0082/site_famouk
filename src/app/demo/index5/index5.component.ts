import { Component, ElementRef, HostListener } from '@angular/core';
import { Home5Component } from "./components/home5/home5.component";
import { About5Component } from "./components/about5/about5.component";
import { Counter5Component } from "./components/counter5/counter5.component";
import { Choose5Component } from "./components/choose5/choose5.component";
import { Faq5Component } from "./components/faq5/faq5.component";
import { Work5Component } from "./components/work5/work5.component";
import { BlogNews5Component } from "./components/blog-news5/blog-news5.component";
import { Cta5Component } from "./components/cta5/cta5.component";
import { Footer5Component } from "./components/footer5/footer5.component";
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { MobileSidebarComponent } from "../../component/mobile-sidebar/mobile-sidebar.component";
import { PageScrollComponent } from "../../layout/page-scroll/page-scroll.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index5',
  imports: [Home5Component, About5Component, RouterLink,Counter5Component, Choose5Component, Faq5Component, Work5Component, BlogNews5Component, Cta5Component, Footer5Component, NavbarComponent, MobileSidebarComponent, PageScrollComponent],
  templateUrl: './index5.component.html',
  styles: ``
})
export class Index5Component {
  isMenuOpen = false;
  constructor(private el: ElementRef) { }

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
