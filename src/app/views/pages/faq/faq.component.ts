import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../component/breadcrumb/breadcrumb.component";
import { NgbAccordionModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faq',
  imports: [BreadcrumbComponent,NgbNavModule,NgbAccordionModule],
  templateUrl: './faq.component.html',
  styles: ``
})
export class FaqComponent {

}
