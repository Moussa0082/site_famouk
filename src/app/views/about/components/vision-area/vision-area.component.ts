import { Component, inject } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadImageService } from '../../../../service/head-image.service';
import { HeadImage } from '../../../../models/HeadImage';
import { catchError, map, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-vision-area',
  imports: [NgbNavModule],
  templateUrl: './vision-area.component.html',
  styleUrl: './vision-area.component.scss',
})
export class VisionAreaComponent {
  ngOnInit(): void {
    this.loadSingleHeadImage('aya5');
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
