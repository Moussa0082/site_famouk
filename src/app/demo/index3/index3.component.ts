import { Component, ElementRef, HostListener } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { Index3HeroComponent } from "./components/index3-hero/index3-hero.component";
import { Index3AboutComponent } from "./components/index3-about/index3-about.component";
import { Index3ServiceComponent } from "./components/index3-service/index3-service.component";
import { Index3GalleryComponent } from "./components/index3-gallery/index3-gallery.component";
import { Index3TestimonialComponent } from "./components/index3-testimonial/index3-testimonial.component";
import { Index3faqsComponent } from "./components/index3faqs/index3faqs.component";
import { Index3ConatctComponent } from "./components/index3-conatct/index3-conatct.component";
import { Index3BlogComponent } from "./components/index3-blog/index3-blog.component";
import { Index3CtaComponent } from "./components/index3-cta/index3-cta.component";
import { Index3FooterComponent } from "./components/index3-footer/index3-footer.component";
import { MobileSidebarComponent } from "../../component/mobile-sidebar/mobile-sidebar.component";
import { PageScrollComponent } from "../../layout/page-scroll/page-scroll.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index3',
  imports: [NavbarComponent, RouterLink,Index3HeroComponent, Index3AboutComponent, Index3ServiceComponent, Index3GalleryComponent, Index3TestimonialComponent, Index3faqsComponent, Index3ConatctComponent, Index3BlogComponent, Index3CtaComponent, Index3FooterComponent, MobileSidebarComponent, PageScrollComponent],
  templateUrl: './index3.component.html',
  styles: ``
})
export class Index3Component {
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
