import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../component/breadcrumb/breadcrumb.component";
import { ServiceAreaComponent } from "./components/service-area/service-area.component";
import { ServiceArea2Component } from "./components/service-area2/service-area2.component";

@Component({
  selector: 'app-services',
  imports: [BreadcrumbComponent, ServiceAreaComponent, ServiceArea2Component],
  templateUrl: './services.component.html',
  styles: ``
})
export class ServicesComponent {

}
