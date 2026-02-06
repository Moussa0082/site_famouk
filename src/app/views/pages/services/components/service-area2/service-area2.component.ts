import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service-area2',
  imports: [CommonModule],
  templateUrl: './service-area2.component.html',
  styles: ``
})
export class ServiceArea2Component {
  services = [
    {
      title: 'Food & Water Charity',
      description: 'Big Hearts the largest crowdfunding community connecting nonprofits, donors, and companies in nearly.',
      image: 'assets/img/service/vl-service-inner-1.1.png',
      icon: 'assets/img/icons/vl-service-iner-ic-1.1.svg',
      active: false
    },
    {
      title: 'Become a Volunteer',
      description: 'Big Hearts the largest crowdfunding community connecting nonprofits, donors, and companies in nearly.',
      image: 'assets/img/service/vl-service-inner-1.2.png',
      icon: 'assets/img/icons/vl-service-iner-ic-1.2.svg',
      active: true
    },
    {
      title: 'Send Gift for Children',
      description: 'Big Hearts the largest crowdfunding community connecting nonprofits, donors, and companies in nearly.',
      image: 'assets/img/service/vl-service-inner-1.3.png',
      icon: 'assets/img/icons/vl-service-iner-ic-1.1.svg',
      active: false
    }
  ];
}
