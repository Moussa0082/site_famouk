import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogs } from '../../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-content',
  imports: [RouterLink,CommonModule],
  templateUrl: './blog-content.component.html',
  styles: ``
})
export class BlogContentComponent {
  blogs = blogs
}
