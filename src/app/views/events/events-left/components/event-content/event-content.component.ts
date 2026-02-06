import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { eventArea } from '../../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-content',
  imports: [RouterLink,CommonModule],
  templateUrl: './event-content.component.html',
  styles: ``
})
export class EventContentComponent {
eventData = eventArea
hoverIndex = 0
}
