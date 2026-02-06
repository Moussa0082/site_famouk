import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-scroll-navbar',
  imports: [RouterLink,CommonModule, ScrollToModule],
  templateUrl: './scroll-navbar.component.html',
  styles: ``,
  providers: [ScrollToService],

})
export class ScrollNavbarComponent {
  @Input() logoImage: string = '';
  @Input() label: string = '';
  @Input() link: string = '#';
  @Input() btnClass: string = '';
  @Input() icon: string = '';
  @Input() btnParent: string = '';
  @Input() headerArea: string = '';
  @Input() headerElement: string = '';
  @Input() menuClass: string = '';
  @Input() container: boolean = false;
  @Input() buttonClass: string = '';


  activeLink: string = 'about' // The default active link
  isNavbarOpen = false
  isSticky = false
  @Input() navbarColor: boolean = false

  ngOnInit() {
    const navbar = document.getElementById('navbar')
  }
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      this.isSticky = true
    } else {
      this.isSticky = false
    }
    const sections = [
      'home',
      'services',
      'features',
      'about',
      'pricing',
      'testimonial',
      'blog',
      'contact',
    ]
    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        // If the section is in view (top of the section is in the viewport)
        if (rect.top <= 0 && rect.bottom >= 0) {
          this.activeLink = section
        }
      }
    }
  }
  setActiveLink(link: string): void {
    this.activeLink = link
  }
}
