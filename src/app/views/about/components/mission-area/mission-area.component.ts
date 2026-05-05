import { Component, inject } from '@angular/core';
import { HeadImageService } from '../../../../service/head-image.service';
import { HeadImage } from '../../../../models/HeadImage';
import { catchError, forkJoin, map, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-mission-area',
  imports: [],
  templateUrl: './mission-area.component.html',
  styleUrl: './mission-area.component.scss',
})
export class MissionAreaComponent {
  ngOnInit(): void {
    this.loadSingleHeadImage('aya4');
  }
  private headService = inject(HeadImageService);

  headImage: HeadImage | null = null;

  loadSingleHeadImage(pageName: string) {
    this.headService
      .getHeadImageByPage(pageName)
      .pipe(
        map((response) => {
          if (response && response.headImage) {
            const item = response.headImage;
            // Reconstruction de l'URL
            if (item.image && !item.image.startsWith('http')) {
              item.image = `${environment.apiUrl}/${item.image}`;
            }
            return item;
          }
          return null;
        }),
        catchError((err) => {
          console.error(
            `Erreur lors du chargement de l'image ${pageName}`,
            err
          );
          return of(null);
        })
      )
      .subscribe((result) => {
        this.headImage = result;
        console.log('Image chargée :', this.headImage);
      });
  }
}
