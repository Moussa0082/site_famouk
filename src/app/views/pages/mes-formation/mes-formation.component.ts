import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProgressionService } from '../../../service/progression.service';
import { AuthService } from '../../../service/auth.service';
import { ProgressionFormationResponse } from '../../../models/Progression';
import { environment } from '../../../../environments/environment';
import { CertificatService } from '../../../service/certificat.service';

type FiltreStatut = 'TOUS' | 'EN_COURS' | 'TERMINE';

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
  private certificatService = inject(CertificatService);
  private toastr = inject(ToastrService);

  progressions: ProgressionFormationResponse[] = [];
  isLoading = true;
  errorMessage = '';

  filtreActif: FiltreStatut = 'TOUS';

  /** Formations dont le certificat est en cours de génération. */
  certificatsEnCours = new Set<number>();

  private imagesEnEchec = new Set<number>();

  ngOnInit(): void {
    const userId = this.authService.getUserId();
    if (userId) {
      this.loadUserFormations(userId.toString());
    } else {
      this.isLoading = false;
    }
  }

  loadUserFormations(userId: string): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.progressionService.getMesProgressions(userId).subscribe({
      next: (data) => {
        this.progressions = data ?? [];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des formations', err);
        this.errorMessage = 'Impossible de charger vos formations.';
        this.isLoading = false;
      },
    });
  }

  get formationsFiltrees(): ProgressionFormationResponse[] {
    if (this.filtreActif === 'TOUS') return this.progressions;
    if (this.filtreActif === 'TERMINE') {
      return this.progressions.filter((p) => this.estTerminee(p));
    }
    return this.progressions.filter((p) => !this.estTerminee(p));
  }

  get nbEnCours(): number {
    return this.progressions.filter((p) => !this.estTerminee(p)).length;
  }

  get nbTerminees(): number {
    return this.progressions.filter((p) => this.estTerminee(p)).length;
  }

  /**
   * Le backend renvoie le statut ET le pourcentage : on considère la formation
   * terminée dès que l'un des deux l'indique.
   */
  estTerminee(p: ProgressionFormationResponse): boolean {
    return p.statut === 'TERMINE' || p.progression === 100;
  }

  setFiltre(filtre: FiltreStatut): void {
    this.filtreActif = filtre;
  }

  getStatutLabel(p: ProgressionFormationResponse): string {
    return this.estTerminee(p) ? 'Terminée' : 'En cours';
  }

  getImageFullUrl(path: string | undefined): string {
    if (!path) return '';
    return path.startsWith('http') ? path : `${environment.apiUrl}/${path}`;
  }

  hasVisuel(p: ProgressionFormationResponse): boolean {
    return !!p.formation?.imageUrl && !this.imagesEnEchec.has(p.id);
  }

  onImageError(p: ProgressionFormationResponse): void {
    this.imagesEnEchec.add(p.id);
  }

  trackById(_index: number, p: ProgressionFormationResponse): number {
    return p.id;
  }

  telechargerCertificat(formationId: number): void {
    const userId = this.authService.getUserId()?.toString();
    if (!userId || this.certificatsEnCours.has(formationId)) return;

    this.certificatsEnCours.add(formationId);
    this.certificatService.genererCertificat(userId, formationId).subscribe({
      next: (cert) => {
        this.certificatsEnCours.delete(formationId);
        if (cert.urlPdf) {
          window.open(cert.urlPdf, '_blank');
        } else {
          // Cas où le fichier PDF n'est pas encore prêt sur le serveur
          this.toastr.success(
            'Votre certificat est généré. Retrouvez-le dans « Mes certificats ».',
            'Félicitations !'
          );
        }
      },
      error: (err) => {
        this.certificatsEnCours.delete(formationId);
        console.error(err);
        this.toastr.error('Erreur lors de la récupération du certificat.');
      },
    });
  }

  reload(): void {
    const userId = this.authService.getUserId();
    if (userId) this.loadUserFormations(userId.toString());
  }
}
