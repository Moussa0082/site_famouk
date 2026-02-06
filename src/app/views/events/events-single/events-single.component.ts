import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../component/breadcrumb/breadcrumb.component";
import { EventContentComponent } from './components/event-content/event-content.component';
import { EventSidebarAreaComponent } from './components/event-sidebar-area/event-sidebar-area.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-single',
  imports: [BreadcrumbComponent,EventContentComponent,EventSidebarAreaComponent,CommonModule],
  templateUrl: './events-single.component.html',
  styles: ``,
  styleUrls: ['./events-single.component.scss']
})
export class EventsSingleComponent {
  event = {
    title: 'Forum Jeunesse & Innovation Digitale',
    date: '12 Octobre 2025',
    location: 'Bamako, Mali',
    image: 'assets/img/event/vl-learg-thumb-enent.png',
    description: `
      Cet événement vise à promouvoir la participation citoyenne des jeunes à travers le numérique. 
      Il réunit des acteurs du digital, des entrepreneurs, des créateurs de contenu et des passionnés de technologie 
      autour de conférences, ateliers et sessions d’échanges inspirants.
    `,
    organizer: 'Logo Mali',
    price: 'Gratuit',
    tags: ['Innovation', 'Jeunesse', 'Numérique']
  };
}
