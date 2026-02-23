import { Component, inject, OnInit } from '@angular/core';
import { FormationService } from '../../../service/formation.service';
import { HeadImageService } from '../../../service/head-image.service';
import { FormationResponse } from '../../../models/Formation';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-accueil-utilisateur',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './accueil-utilisateur.component.html',
  styleUrl: './accueil-utilisateur.component.scss',
})
export class AccueilUtilisateurComponent implements OnInit {
  private formationService = inject(FormationService);
  private headService = inject(HeadImageService);

  isLoading: boolean = true;
  errorMessage: string = '';
  searchTerm = '';
  formations: FormationResponse[] = [];

  ngOnInit(): void {
    this.loadFormations();
  }

  loadFormations(): void {
    this.isLoading = true;
    this.formationService.afficherFormations().subscribe({
      next: (data) => {
        this.formations = data;
        this.isLoading = false;
        console.log('Formations récupérées :', data);
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
      return 'assets/images/default-course.jpg'; // Une image par défaut si le chemin est vide
    }
    // Si le chemin commence déjà par http, on le garde tel quel
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    // Sinon on concatène l'URL du serveur avec le chemin relatif
    return `${environment.apiUrl}/${imagePath}`;
  }

  reload(): void {
    this.loadFormations();
  }
}
