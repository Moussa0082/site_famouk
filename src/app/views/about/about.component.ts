import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../component/breadcrumb/breadcrumb.component";
import { AboutAreaComponent } from "./components/about-area/about-area.component";
import { MissionAreaComponent } from "./components/mission-area/mission-area.component";
import { VisionAreaComponent } from "./components/vision-area/vision-area.component";
import { CounterAreaComponent } from "./components/counter-area/counter-area.component";
import { TestiAreaComponent } from "./components/testi-area/testi-area.component";

@Component({
  selector: 'app-about',
  imports: [BreadcrumbComponent, AboutAreaComponent, MissionAreaComponent, VisionAreaComponent, CounterAreaComponent, TestiAreaComponent],
  templateUrl: './about.component.html',
  styles: ``
})
export class AboutComponent {

}
