import { causes } from '../../causes/data';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../component/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { ElearningListComponent } from '../elearning-list/elearning-list.component';
import { QuizListComponent } from '../quiz-list/quiz-list.component';
import { WebinarListComponent } from '../webinar-list/webinar-list.component';
import { Router, RouterModule } from '@angular/router';
import { FormationResponse } from '../../../models/Formation';
import { FormationService } from '../../../service/formation.service';
import { environment } from '../../../../environments/environment';
import { HeadImageService } from '../../../service/head-image.service';
import { HeadImage } from '../../../models/HeadImage';
import { catchError, map, of } from 'rxjs';

@Component({
  imports: [
    BreadcrumbComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    // ElearningListComponent,
    // QuizListComponent,
    // WebinarListComponent,
  ],
  selector: 'app-formation',
  standalone: true,
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
})
export class FormationComponent implements OnInit {
  private formationService = inject(FormationService);
  private headService = inject(HeadImageService);

  isLoading: boolean = true;
  errorMessage: string = '';
  causes = causes;
  selectedTab = 'elearning';
  searchTerm = '';

  tabs = [
    { id: 'elearning', label: 'E-learning' },
    { id: 'quiz', label: 'Quiz & Certification' },
    { id: 'webinar', label: 'Webinaires' },
  ];

  ngOnInit(): void {
    this.loadFormations();
    this.loadImage();
  }

  selectTab(id: string) {
    this.selectedTab = id;
  }

  formations: FormationResponse[] = [];

  logoData: HeadImage | null = null;

  loadImage() {
    const pageName = 'Formation';

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

  loadFormations(): void {
    this.isLoading = true;
    this.formationService.afficherFormations().subscribe({
      next: (data) => {
        this.formations = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = 'Erreur lors de la récupération des données.';
        console.error(err);
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

  reload(): void {
    this.loadFormations();
  }
}
