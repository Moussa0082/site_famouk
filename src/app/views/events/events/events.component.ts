import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../component/breadcrumb/breadcrumb.component";
import { EventAreaComponent } from "./components/event-area/event-area.component";
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


interface EventItem {
  id: string;
  time: string;
  title: string;
  image: string;
  link: string;
}

interface Day {
  label: string;
  date: string;
  month: string;
  year: string;
  events: EventItem[];
}



@Component({
  selector: 'app-events',
  imports: [BreadcrumbComponent, EventAreaComponent, CommonModule,RouterLink,
    RouterModule,],
  templateUrl: './events.component.html',
  styles: ``
})
export class EventsComponent {

  
  days: Day[] = [
    {
      label: '1st Day',
      date: '01',
      month: 'JAN',
      year: '2025',
      events: [
        {id: "1", time: '11:00 AM', title: 'Unity Giving Community Charity Event', image: 'assets/img/blog/vl-blog-sm-thumb-1.1.png', link: '/event-single' },
        {id: "2", time: '02:00 PM', title: 'Spread the Love Charity Art Exhibition', image: 'assets/img/blog/vl-blog-sm-thumb-1.2.png', link: '/event-single' },
        {id: "3", time: '06:00 PM', title: 'Shine for a Cause Charity Dinner & Auction', image: 'assets/img/blog/vl-blog-sm-thumb-1.3.png', link: '/event-single' }
      ]
    },
    {
      label: '2nd Day',
      date: '08',
      month: 'JAN',
      year: '2025',
      events: [
        {id: "4",time: '10:00 AM', title: 'Charity Walkathon', image: 'assets/img/blog/vl-blog-sm-thumb-1.1.png', link: '/event-single' },
        { id: "5", time: '04:00 PM', title: 'Fundraising Concert', image: 'assets/img/blog/vl-blog-sm-thumb-1.2.png', link: '/event-single' }
      ]
    }
    // Tu continues avec 3rd, 4th day…
  ];

}
