import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styles: ``,
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
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

  homeMenuItems = [
    { title: 'Disaster Relief', image: 'assets/img/demo/vl-demo1.1.png', multiPageLink: '/index', onePageLink: '/index-single' },
    { title: 'Animal Rescue and Welfare', image: 'assets/img/demo/vl-demo-1.2.png', multiPageLink: '/index-2', onePageLink: '/index-single-2' },
    { title: 'Water Aid', image: 'assets/img/demo/vl-demo-1.3.png', multiPageLink: '/index-3', onePageLink: '/index-single-3' },
    { title: 'Senior Citizen', image: 'assets/img/demo/vl-demo-1.4.png', multiPageLink: '/index-4', onePageLink: '/index-single-4' },
    { title: 'Human Rights Advocacy', image: 'assets/img/demo/vl-demo-1.5.png', multiPageLink: '/index-5', onePageLink: '/index-single-5' }
  ];


  eventMenuItems = [
    { title: 'Events', link: '/event' },
    { title: 'Events Left', link: '/event-left' },
    { title: 'Events Right', link: '/event-right' },
    { title: 'Events Single', link: '/event-single' }
  ];

  blogMenuItems = [
    { title: 'Blog', link: '/blog' },
    { title: 'Blog Left', link: '/blog-left' },
    { title: 'Blog Right', link: '/blog-right' },
    { title: 'Blog Single', link: '/blog-single' }
  ];

  pageMenuItems = [
    { title: 'Our Services', link: '/services' },
    { title: 'Our Volunteers', link: '/volunteers' },
    { title: 'FAQ', link: '/faq' },
    { title: 'Contact', link: '/contact' },
    { title: '404', link: '/404' }
  ];

  causesPage = [
    { title: 'Causes', link: '/causes' },
    { title: 'Causes Left', link: '/causes-left' },
    { title: 'Causes Right', link: '/causes-right' },
    { title: 'Causes Single', link: '/causes-single' },
  ]

}