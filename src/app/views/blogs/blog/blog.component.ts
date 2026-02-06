import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../component/breadcrumb/breadcrumb.component";
import { BlogContentComponent } from "./components/blog-content/blog-content.component";

@Component({
  selector: 'app-blog',
  imports: [BreadcrumbComponent, BlogContentComponent],
  templateUrl: './blog.component.html',
  styles: ``
})
export class BlogComponent {

}
