import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elearning-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './elearning-detail.component.html',
  styleUrls: ['./elearning-detail.component.scss']
})
export class ElearningDetailComponent {
  @Input() module: any;
  @Output() close = new EventEmitter<void>();
}
