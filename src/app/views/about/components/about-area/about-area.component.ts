import { Component, inject } from '@angular/core';
import { HeadImageService } from '../../../../service/head-image.service';
import { HeadImage } from '../../../../models/HeadImage';
import { catchError, forkJoin, map, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-about-area',
  imports: [],
  templateUrl: './about-area.component.html',
  styleUrl: './about-area.component.scss',
})
export class AboutAreaComponent {
  ngOnInit(): void {
    this.loadAllHeadImages();
  }
  private headService = inject(HeadImageService);

  headImages: HeadImage[] = [];
  aya1: HeadImage | null = null;
  aya2: HeadImage | null = null;
  aya3: HeadImage | null = null;

  pagesToManage = ['aya1', 'aya2', 'aya3'];

  loadAllHeadImages() {
    const requests = this.pagesToManage.map((page) =>
      this.headService.getHeadImageByPage(page).pipe(
        // map((response) =>
        //   response && response.headImage ? response.headImage : null
        // ),
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
        this.aya1 = results[0];
        this.aya2 = results[1];
        this.aya3 = results[2];
        console.log('Images chargées :', this.headImages);
      },
      error: (err) => console.error('Erreur lors du chargement groupé', err),
    });
  }
}
