import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service-area',
  imports: [CommonModule],
  templateUrl: './service-area.component.html',
  styles: ``
})
export class ServiceAreaComponent {
  services = [
    {
      title: 'Pawsitive Rescue',
      description: 'Our services are designed to address critical needs and create sustainable solutions for the communities we.',
      icon: 'assets/img/icons/vl-service-icon-2.1.svg',
      image: 'assets/img/service/vl-service-sm-thumb-1.1.png',
      active: false
    },
    {
      title: 'Safe Haven Care',
      description: 'Through targeted programs education healthcare, emergency & community development, aim uplift individuals.',
      icon: 'assets/img/icons/vl-service-ic-iner-1.1.svg',
      image: 'assets/img/service/vl-service-sm-thumb-1.2.png',
      active: true
    },
    {
      title: 'Guardian Rescue',
      description: 'From distributing essential resources to offering support for long-term growth, each service is thoughtfully.',
      icon: 'assets/img/icons/vl-service-icon-2.3.svg',
      image: 'assets/img/service/vl-service-sm-thumb-1.3.png',
      active: false
    },
    {
      title: 'Fur Ever Care',
      description: 'We believe that by working hand-in-hand with local partners supporters, we can bring real change to those.',
      icon: 'assets/img/icons/vl-service-icon-2.1.svg',
      image: 'assets/img/service/vl-service-sm-thumb-1.4.png',
      active: false
    },
    {
      title: 'Donation',
      description: 'Our organization committe providing a wide range of services that meet urgent needs and support lasting.',
      icon: 'assets/img/icons/vl-service-heart.svg',
      image: 'assets/img/service/vl-service-sm-thumb-1.5.png',
      active: false
    },
    {
      title: 'Volunteering',
      description: 'Big Hearts the largest crowdfunding community connecting nonprofits, donors, and companies in nearly.',
      icon: 'assets/img/icons/vl-service-inner-icon-1.6.svg',
      image: 'assets/img/service/vl-service-sm-thumb-1.6.png',
      active: false
    },
    {
      title: 'Sponsors',
      description: 'From providing immediate relief in times of crisis, such as food, water, shelter, and medical aid, developing.',
      icon: 'assets/img/icons/vl-service-inner-icon-1.7.svg',
      image: 'assets/img/service/vl-service-sm-thumb-1.7.png',
      active: false
    },
    {
      title: 'Community',
      description: 'Each service is a collaborative effort, involving local partners, volunteers, and community leaders understand.',
      icon: 'assets/img/icons/vl-service-inner-icon-1.8.svg',
      image: 'assets/img/service/vl-service-sm-thumb-1.8.png',
      active: false
    },
    {
      title: 'Guardian Rescue',
      description: 'We also invest sustainable solutions clean water initiatives, educational scholarships, and empowerment.',
      icon: 'assets/img/icons/vl-service-icon-2.3.svg',
      image: 'assets/img/service/vl-service-sm-thumb-1.9.png',
      active: false
    }
  ];

}
