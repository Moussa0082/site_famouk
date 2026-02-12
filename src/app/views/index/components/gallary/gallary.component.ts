import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import glightbox from 'glightbox';
import { HeadImageService } from '../../../../service/head-image.service';
import { HeadImage } from '../../../../models/HeadImage';
import { catchError, forkJoin, map, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-gallary',
  imports: [RouterLink],
  templateUrl: './gallary.component.html',
  styles: ``,
})
export class GallaryComponent implements OnInit {
  ngOnInit() {
    const lightbox = glightbox({
      openEffect: 'fade',
      closeEffect: 'fade',
    });
    this.loadAllHeadImages();
  }

  private headService = inject(HeadImageService);

  headImages: HeadImage[] = [];
  image1: HeadImage | null = null;
  image2: HeadImage | null = null;
  image3: HeadImage | null = null;
  image4: HeadImage | null = null;
  image5: HeadImage | null = null;
  image6: HeadImage | null = null;

  pagesToManage = [
    'Galeri1',
    'Galeri2',
    'Galeri3',
    'Galeri4',
    'Galeri5',
    'Galeri6',
  ];

  loadAllHeadImages() {
    const requests = this.pagesToManage.map((page) =>
      this.headService.getHeadImageByPage(page).pipe(
        map((response) => {
          if (response && response.headImage) {
            const item = response.headImage;
            // IMPORTANT : Reconstruire l'URL ici aussi !
            if (item.image && !item.image.startsWith('http')) {
              item.image = `${environment.apiUrl}/${item.image}`;
            }
            return item;
          }
          return null;
        }),
        catchError(() => of(null))
      )
    );

    forkJoin(requests).subscribe({
      next: (results) => {
        this.headImages = results.filter((img) => img !== null);
        this.image1 = results[0];
        this.image2 = results[1];
        this.image3 = results[2];
        this.image4 = results[3];
        this.image5 = results[4];
        this.image6 = results[5];
        console.log('Images chargées :', this.headImages);
      },
      error: (err) => console.error('Erreur lors du chargement groupé', err),
    });
  }
}
