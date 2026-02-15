import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProgressionService } from '../../../service/progression.service';
import { AuthService } from '../../../service/auth.service';
import { ProgressionFormationResponse } from '../../../models/Progression';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-mes-formation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mes-formation.component.html',
  styleUrl: './mes-formation.component.scss',
})
export class MesFormationComponent implements OnInit {
  private progressionService = inject(ProgressionService);
  private authService = inject(AuthService);

  progressions: ProgressionFormationResponse[] = [];
  isLoading = true;

  ngOnInit(): void {
    const userId = this.authService.getUserId();
    if (userId) {
      this.loadUserFormations(userId.toString());
    }
  }

  loadUserFormations(userId: string): void {
    this.isLoading = true;
    this.progressionService.getMesProgressions(userId).subscribe({
      next: (data) => {
        this.progressions = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des formations', err);
        this.isLoading = false;
      },
    });
  }

  getImageFullUrl(path: string | undefined): string {
    return path
      ? `${environment.apiUrl}/${path}`
      : 'assets/images/default-formation.jpg';
  }
}
