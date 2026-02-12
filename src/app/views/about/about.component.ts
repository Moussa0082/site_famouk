import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../component/breadcrumb/breadcrumb.component';
import { AboutAreaComponent } from './components/about-area/about-area.component';
import { MissionAreaComponent } from './components/mission-area/mission-area.component';
import { VisionAreaComponent } from './components/vision-area/vision-area.component';
import { CounterAreaComponent } from './components/counter-area/counter-area.component';
import { TestiAreaComponent } from './components/testi-area/testi-area.component';
import { HeadImageService } from '../../service/head-image.service';
import { HeadImage } from '../../models/HeadImage';
import { catchError, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-about',
  imports: [
    BreadcrumbComponent,
    AboutAreaComponent,
    MissionAreaComponent,
    VisionAreaComponent,
    CounterAreaComponent,
    TestiAreaComponent,
  ],
  templateUrl: './about.component.html',
  styles: ``,
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    this.loadLogo();
  }
  private headService = inject(HeadImageService);
  logoData: HeadImage | null = null;

  loadLogo() {
    const pageName = 'A_propos';

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
