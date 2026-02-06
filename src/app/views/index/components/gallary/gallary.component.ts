import {Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import glightbox from 'glightbox';

@Component({
  selector: 'app-gallary',
  imports: [RouterLink],
  templateUrl: './gallary.component.html',
  styles: ``
})
export class GallaryComponent implements OnInit {
  ngOnInit() {
    const lightbox = glightbox({
      openEffect: 'fade',
      closeEffect: 'fade',
    });
  }
}
