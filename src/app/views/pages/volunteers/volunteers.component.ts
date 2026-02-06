import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../component/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-volunteers',
  imports: [BreadcrumbComponent],
  templateUrl: './volunteers.component.html',
  styles: ``
})
export class VolunteersComponent {
  teamMembers = [
    {
      "name": "Anita Gusikowski",
      "role": "General Manager",
      "image": "assets/img/team/vl-team-inner-1.1.png",
      "socialLinks": [
        { "icon": "fa-brands fa-facebook-f", "link": "#" },
        { "icon": "fa-brands fa-instagram", "link": "#" },
        { "icon": "fa-brands fa-twitter", "link": "#" },
        { "icon": "fa-brands fa-github", "link": "#" }
      ]
    },
    {
      "name": "Anita Gusikowski",
      "role": "General Manager",
      "image": "assets/img/team/vl-team-inner-1.2.png",
      "socialLinks": [
        { "icon": "fa-brands fa-facebook-f", "link": "#" },
        { "icon": "fa-brands fa-instagram", "link": "#" },
        { "icon": "fa-brands fa-twitter", "link": "#" },
        { "icon": "fa-brands fa-github", "link": "#" }
      ]
    },
    {
      "name": "Larry Bartoletti",
      "role": "Manager Head",
      "image": "assets/img/team/vl-team-inner-1.3.png",
      "socialLinks": [
        { "icon": "fa-brands fa-facebook-f", "link": "#" },
        { "icon": "fa-brands fa-instagram", "link": "#" },
        { "icon": "fa-brands fa-twitter", "link": "#" },
        { "icon": "fa-brands fa-github", "link": "#" }
      ]
    },
    {
      "name": "Raymond Koelpin",
      "role": "Senior Manager",
      "image": "assets/img/team/vl-team-inner-1.4.png",
      "socialLinks": [
        { "icon": "fa-brands fa-facebook-f", "link": "#" },
        { "icon": "fa-brands fa-instagram", "link": "#" },
        { "icon": "fa-brands fa-twitter", "link": "#" },
        { "icon": "fa-brands fa-github", "link": "#" }
      ]
    },
    {
      "name": "Alfred Thiel V",
      "role": "Senior Manager",
      "image": "assets/img/team/vl-team-inner-1.5.png",
      "socialLinks": [
        { "icon": "fa-brands fa-facebook-f", "link": "#" },
        { "icon": "fa-brands fa-instagram", "link": "#" },
        { "icon": "fa-brands fa-twitter", "link": "#" },
        { "icon": "fa-brands fa-github", "link": "#" }
      ]
    },
    {
      "name": "Edith Torphy",
      "role": "Senior Manager",
      "image": "assets/img/team/vl-team-inner-1.6.png",
      "socialLinks": [
        { "icon": "fa-brands fa-facebook-f", "link": "#" },
        { "icon": "fa-brands fa-instagram", "link": "#" },
        { "icon": "fa-brands fa-twitter", "link": "#" },
        { "icon": "fa-brands fa-github", "link": "#" }
      ]
    },
    {
      "name": "Alison Kohler",
      "role": "Senior Manager",
      "image": "assets/img/team/vl-team-inner-1.7.png",
      "socialLinks": [
        { "icon": "fa-brands fa-facebook-f", "link": "#" },
        { "icon": "fa-brands fa-instagram", "link": "#" },
        { "icon": "fa-brands fa-twitter", "link": "#" },
        { "icon": "fa-brands fa-github", "link": "#" }
      ]
    },
    {
      "name": "Jerald Douglas IV",
      "role": "Senior Manager",
      "image": "assets/img/team/vl-team-inner-1.8.png",
      "socialLinks": [
        { "icon": "fa-brands fa-facebook-f", "link": "#" },
        { "icon": "fa-brands fa-instagram", "link": "#" },
        { "icon": "fa-brands fa-twitter", "link": "#" },
        { "icon": "fa-brands fa-github", "link": "#" }
      ]
    },
    {
      "name": "Edwin Baumbach II",
      "role": "Senior Manager",
      "image": "assets/img/team/vl-team-inner-1.9.png",
      "socialLinks": [
        { "icon": "fa-brands fa-facebook-f", "link": "#" },
        { "icon": "fa-brands fa-instagram", "link": "#" },
        { "icon": "fa-brands fa-twitter", "link": "#" },
        { "icon": "fa-brands fa-github", "link": "#" }
      ]
    }
  ]

}
