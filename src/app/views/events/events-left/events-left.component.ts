import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../component/breadcrumb/breadcrumb.component";
import { EventSidebarAreaComponent } from "./components/event-sidebar-area/event-sidebar-area.component";
import { EventContentComponent } from "./components/event-content/event-content.component";

@Component({
  selector: 'app-events-left',
  imports: [BreadcrumbComponent, EventSidebarAreaComponent, EventContentComponent],
  templateUrl: './events-left.component.html',
  styles: ``
})
export class EventsLeftComponent {

}
