import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../component/breadcrumb/breadcrumb.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error404',
  imports: [BreadcrumbComponent,RouterLink],
  templateUrl: './error404.component.html',
  styles: ``
})
export class Error404Component {

}
