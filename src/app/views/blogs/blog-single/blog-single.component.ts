import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../component/breadcrumb/breadcrumb.component";
import { BlogContentComponent } from './components/blog-content/blog-content.component';
import { BlogSidebarComponent } from './components/blog-sidebar/blog-sidebar.component';

@Component({
  selector: 'app-blog-single',
  imports: [BreadcrumbComponent,BlogContentComponent,BlogSidebarComponent],
  templateUrl: './blog-single.component.html',
  styles: ``
})
export class BlogSingleComponent {

}
