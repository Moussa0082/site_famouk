import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../component/breadcrumb/breadcrumb.component";
import { ContentCausesComponent } from './components/content-causes/content-causes.component';
import { SidebarCauseComponent } from './components/sidebar-cause/sidebar-cause.component';

@Component({
  selector: 'app-causes-single',
  imports: [BreadcrumbComponent,ContentCausesComponent,SidebarCauseComponent],
  templateUrl: './causes-single.component.html',
  styles: ``
})
export class CausesSingleComponent {

}
