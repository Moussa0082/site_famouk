import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../component/breadcrumb/breadcrumb.component';
import { EventAreaComponent } from './components/event-area/event-area.component';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeadImageService } from '../../../service/head-image.service';
import { HeadImage } from '../../../models/HeadImage';
import { catchError, map, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-events',
  imports: [
    BreadcrumbComponent,
    EventAreaComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './events.component.html',
  styles: ``,
})
export class EventsComponent implements OnInit {
  ngOnInit(): void {
    this.loadImage();
  }
  private headService = inject(HeadImageService);
  logoData: HeadImage | null = null;
  loadImage() {
    const pageName = 'Event';

    this.headService
      .getHeadImageByPage(pageName)
      .pipe(
        map((response) => {
          // On extrait l'objet 'headImage' de la réponse JSON
          if (response && response.headImage) {
            const item = response.headImage;

            // Reconstruction de l'URL avec ton environnement
            if (item.image && !item.image.startsWith('http')) {
              item.image = `${environment.apiUrl}/${item.image}`;
            }
            return item;
          }
          return null;
        }),
        catchError((err) => {
          console.error(`Erreur lors de la récupération du logo:`, err);
          return of(null);
        })
      )
      .subscribe((data) => {
        this.logoData = data;
        console.log('image chargé avec succès :', this.logoData);
      });
  }
}
