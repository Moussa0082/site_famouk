import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-webinar-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './webinar-detail.component.html',
  styleUrls: ['./webinar-detail.component.scss']
})
export class WebinarDetailComponent {
  @Input() webinar: any;
  @Output() close = new EventEmitter<void>();
}
