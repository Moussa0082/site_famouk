import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../component/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterResourcesPipe } from './pipe/filterResources';
import { Ressource } from '../../../models/Ressource';
import { RessourceService } from '../../../service/ressource.service';
import { environment } from '../../../../environments/environment';
import { HeadImageService } from '../../../service/head-image.service';
import { HeadImage } from '../../../models/HeadImage';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-ressource',
  imports: [
    BreadcrumbComponent,
    CommonModule,
    FormsModule,
    FilterResourcesPipe,
  ],
  templateUrl: './ressource.component.html',
  styleUrl: './ressource.component.scss',
})
export class RessourceComponent implements OnInit {
  private ressourceService = inject(RessourceService);
  private headService = inject(HeadImageService);

  searchTerm: string = '';
  selectedTheme: string = '';
  errorMessage: string = '';
  resources: Ressource[] = [];
  isLoading: boolean = true;

  logoData: HeadImage | null = null;

  ngOnInit() {
    this.loadRessource();
    this.loadImage();
  }

  loadRessource() {
    this.isLoading = true;
    this.ressourceService.getAllRessources().subscribe({
      next: (data: Ressource[]) => {
        this.resources = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des blogs', err);
        this.errorMessage = 'Impossible de charger les articles.';
        this.isLoading = false;
      },
    });
  }
  getImageFullUrl(imagePath: string): string {
    if (!imagePath) {
      return 'assets/images/default-course.jpg';
    }
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    return `${environment.apiUrl}/${imagePath}`;
  }

  loadImage() {
    const pageName = 'Ressource';

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
