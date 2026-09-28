import { Component, ElementRef, HostListener } from '@angular/core';
import { AlertComponent } from "../alert/alert.component";
import { NavbarComponent } from "../navbar/navbar.component";
// import { RouterOutlet } from '@angular/router';
import { RouterOutlet, RouterLink } from '@angular/router';   // ✅ ajoute RouterLink ici
import { FooterComponent } from "../footer/footer.component";
import { SubscribeComponent } from "../../component/subscribe/subscribe.component";
import { MobileSidebarComponent } from "../../component/mobile-sidebar/mobile-sidebar.component";
import { PageScrollComponent } from "../page-scroll/page-scroll.component";

@Component({
  selector: 'app-layout',
  imports: [AlertComponent,
    RouterLink,            // ✅ obligatoire pour <a routerLink="...">
    NavbarComponent, RouterOutlet, FooterComponent, SubscribeComponent, MobileSidebarComponent, PageScrollComponent],
  templateUrl: './layout.component.html',
  styles: `
    /* Le thème ne dimensionnait pas ce logo : l'emplacement contenait
       auparavant du texte, pas une image. */
    .mobile-logo {
      display: flex;
      align-items: center;
      min-width: 0;
    }

    .mobile-logo a {
      display: inline-flex;
      align-items: center;
      line-height: 0;
    }

    .mobile-logo img {
      height: 38px;
      width: auto;
      max-width: 190px;
      object-fit: contain;
    }

    @media (max-width: 400px) {
      .mobile-logo img {
        height: 32px;
        max-width: 150px;
      }
    }
  `
})
export class LayoutComponent {
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
