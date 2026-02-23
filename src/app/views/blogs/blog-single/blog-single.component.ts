import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../component/breadcrumb/breadcrumb.component';
import { BlogContentComponent } from './components/blog-content/blog-content.component';
import { BlogSidebarComponent } from './components/blog-sidebar/blog-sidebar.component';
import { HeadImageService } from '../../../service/head-image.service';
import { HeadImage } from '../../../models/HeadImage';
import { catchError, map, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-blog-single',
  imports: [BreadcrumbComponent, BlogSidebarComponent],
  templateUrl: './blog-single.component.html',
  styles: ``,
})
export class BlogSingleComponent implements OnInit {
  ngOnInit(): void {
    this.loadImage();
  }
  private headService = inject(HeadImageService);
  logoData: HeadImage | null = null;
  loadImage() {
    const pageName = 'Blog';

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
