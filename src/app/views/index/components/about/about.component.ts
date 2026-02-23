import { Component, inject, OnInit } from '@angular/core';
import { GsapRevealDirective } from '../../../../directives/gsap-reveal.directive';
import { RouterLink } from '@angular/router';
import { HeadImage } from '../../../../models/HeadImage';
import { HeadImageService } from '../../../../service/head-image.service';
import { catchError, forkJoin, map, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-about',
  imports: [GsapRevealDirective, RouterLink],
  templateUrl: './about.component.html',
  styles: ``,
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    this.loadAllHeadImages();
  }
  private headService = inject(HeadImageService);

  headImages: HeadImage[] = [];
  about1: HeadImage | null = null;
  about2: HeadImage | null = null;
  objectif1: HeadImage | null = null;
  objectif2: HeadImage | null = null;
  objectif3: HeadImage | null = null;

  pagesToManage = ['About1', 'About2', 'Objectif1', 'Objectif2', 'Objectif3'];

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
        this.about1 = results[0];
        this.about2 = results[1];
        this.objectif1 = results[2];
        this.objectif2 = results[3];
        this.objectif3 = results[4];
        console.log('Images chargées :', this.headImages);
      },
      error: (err) => console.error('Erreur lors du chargement groupé', err),
    });
  }
}
