import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../component/breadcrumb/breadcrumb.component";
import { causes } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-causes',
  imports: [BreadcrumbComponent,CommonModule],
  templateUrl: './causes.component.html',
  styles: ``
})
export class CausesComponent {
  causes = causes
}
