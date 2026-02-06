import { Component } from '@angular/core';
import {  blogs } from '../../../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-content',
  imports: [RouterLink],
  templateUrl: './blog-content.component.html',
  styles: ``,
  styleUrl: './blog-content.component.scss'
})
export class BlogContentComponent {
  blogs = blogs
}
