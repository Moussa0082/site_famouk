import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumb.component.html',
  styles: ``
})
export class BreadcrumbComponent {
  @Input() backgroundImage: string = '';
  @Input() shape1: string = '';
  @Input() shape2: string = '';
  @Input() shape3: string = '';
  @Input() pageTitle: string = '';
}
