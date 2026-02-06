import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


interface EventItem {
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
  selector: 'app-event',
  imports: [RouterLink],
  templateUrl: './event.component.html',
  styles: ``
})
export class EventComponent {

  days: Day[] = [
    {
      label: '1st Day',
      date: '01',
      month: 'JAN',
      year: '2025',
      events: [
        { time: '11:00 AM', title: 'Unity Giving Community Charity Event', image: 'assets/img/blog/vl-blog-sm-thumb-1.1.png', link: '/event-single' },
        { time: '02:00 PM', title: 'Spread the Love Charity Art Exhibition', image: 'assets/img/blog/vl-blog-sm-thumb-1.2.png', link: '/event-single' },
        { time: '06:00 PM', title: 'Shine for a Cause Charity Dinner & Auction', image: 'assets/img/blog/vl-blog-sm-thumb-1.3.png', link: '/event-single' }
      ]
    },
    {
      label: '2nd Day',
      date: '08',
      month: 'JAN',
      year: '2025',
      events: [
        { time: '10:00 AM', title: 'Charity Walkathon', image: 'assets/img/blog/vl-blog-sm-thumb-1.1.png', link: '/event-single' },
        { time: '04:00 PM', title: 'Fundraising Concert', image: 'assets/img/blog/vl-blog-sm-thumb-1.2.png', link: '/event-single' }
      ]
    }
    // Tu continues avec 3rd, 4th day…
  ];
}
