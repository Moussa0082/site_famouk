import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../component/breadcrumb/breadcrumb.component";
import { SidebarCauseComponent } from "./components/sidebar-cause/sidebar-cause.component";
import { ContentCausesComponent } from "./components/content-causes/content-causes.component";

@Component({
  selector: 'app-causes-left',
  imports: [BreadcrumbComponent, SidebarCauseComponent, ContentCausesComponent],
  templateUrl: './causes-left.component.html',
  styles: ``
})
export class CausesLeftComponent {

}
