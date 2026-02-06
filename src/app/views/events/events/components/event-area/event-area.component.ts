import { Component } from '@angular/core';
import { eventArea } from '../../../data';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-area',
  imports: [RouterLink,CommonModule],
  templateUrl: './event-area.component.html',
  styleUrl: './event-area.component.scss'
})
export class EventAreaComponent {
  eventAreaData = eventArea;
  hoverIndex: number = 0
}
