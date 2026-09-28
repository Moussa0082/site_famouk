import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormationService } from '../../../service/formation.service';
import { environment } from '../../../../environments/environment';
import { ModuleService } from '../../../service/module.service';
import { ModuleResponse } from '../../../models/Module';
import { FormationResponse } from '../../../models/Formation';
import { CoursService } from '../../../service/cours.service';
import { CoursResponseDTO } from '../../../models/Cours';
import { ProgressionService } from '../../../service/progression.service';
import { AuthService } from '../../../service/auth.service';
import { DemarrerFormationRequest } from '../../../models/Progression';

// Interface locale pour gérer l'affichage de l'accordéon
interface ModuleUI extends ModuleResponse {
  isOpen: boolean;
  cours?: CoursResponseDTO[];
  isLessonsLoading?: boolean;
}

@Component({
  selector: 'app-detail-formation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail-formation.component.html',
  styleUrl: './detail-formation.component.scss',
})
export class DetailFormationComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private formationService = inject(FormationService);
  private courService = inject(CoursService);
  private moduleService = inject(ModuleService);
  private progressionService = inject(ProgressionService);
  private authService = inject(AuthService);
  private toastr = inject(ToastrService);

  modules: ModuleUI[] = [];
  formation: FormationResponse | null = null;
  isLoading = true;
  errorMessage = '';

  /** Vrai dès que l'apprenant a démarré cette formation. */
  isStarted = false;
  progressionId: number | null = null;
  progressionPourcent = 0;

  /** Évite les doubles clics pendant l'appel d'inscription. */
  isSubmitting = false;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadData(id);
      this.checkIfStarted(id);
    } else {
      this.isLoading = false;
      this.errorMessage = 'Formation introuvable.';
    }
  }

  loadData(id: string): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.formationService.getFormationById(id).subscribe({
      next: (data) => {
        this.formation = data;
        this.loadModules(Number(id));
      },
      error: (err) => {
        console.error('Erreur formation', err);
        this.errorMessage = "Cette formation n'a pas pu être chargée.";
        this.isLoading = false;
      },
    });
  }

  loadModules(formationId: number): void {
    this.moduleService.getModulesByFormation(formationId).subscribe({
      next: (data) => {
        // Transforme les données du backend en données UI
        this.modules = data
          .map((m) => ({ ...m, isOpen: false }))
          .sort((a, b) => a.ordre - b.ordre);

        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur modules', err);
        this.isLoading = false;
      },
    });
  }

  toggleModule(index: number): void {
    const module = this.modules[index];
    if (!module) return;

    module.isOpen = !module.isOpen;
    // Si on ouvre le module et que les cours n'ont pas encore été chargés
    if (module.isOpen && (!module.cours || module.cours.length === 0)) {
      this.loadCoursForModule(index);
    }
  }

  loadCoursForModule(index: number): void {
    const module = this.modules[index];
    module.isLessonsLoading = true;

    this.courService.getCoursByModule(module.id).subscribe({
      next: (data) => {
        module.cours = data.sort((a, b) => a.ordre - b.ordre);
        module.isLessonsLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des cours', err);
        module.isLessonsLoading = false;
      },
    });
  }

  /**
   * Clic sur un cours du programme.
   * Tant que la formation n'est pas démarrée, le contenu reste verrouillé :
   * on l'explique à l'apprenant au lieu de le laisser sans réponse.
   */
  lireCours(cours: CoursResponseDTO): void {
    if (!this.isStarted || !this.progressionId) {
      this.toastr.info(
        'Démarrez la formation pour accéder à « ' + cours.titre + ' ».',
        'Contenu verrouillé'
      );
      return;
    }

    this.router.navigate(['/dashboard/lecture', this.progressionId]);
  }

  /**
   * Bouton principal : démarre la formation, ou emmène directement à la
   * lecture si elle est déjà en cours.
   */
  onActionPrincipale(): void {
    if (this.isStarted && this.progressionId) {
      this.router.navigate(['/dashboard/lecture', this.progressionId]);
      return;
    }
    this.demarrerFormation();
  }

  demarrerFormation(): void {
    const userId = this.authService.getUserId(); // Récupère l'ID du user
    if (!userId) {
      this.toastr.warning(
        'Vous devez être connecté pour démarrer cette formation.'
      );
      this.router.navigate(['/login']);
      return;
    }
    if (!this.formation || this.isSubmitting) return;

    this.isSubmitting = true;
    const request: DemarrerFormationRequest = {
      formationId: this.formation.id,
    };

    this.progressionService.demarrerFormation(userId, request).subscribe({
      next: (progression) => {
        this.isSubmitting = false;
        this.isStarted = true;
        this.progressionId = progression.id;
        this.progressionPourcent = progression.progression ?? 0;
        this.toastr.success('Bonne formation !', 'Inscription confirmée');
        this.router.navigate(['/dashboard/lecture', progression.id]);
      },
      error: (err) => {
        this.isSubmitting = false;
        console.error("Erreur d'inscription", err);
        this.toastr.error(
          'Une erreur est survenue lors du démarrage de la formation.'
        );
      },
    });
  }

  // Vérifie si l'utilisateur a déjà commencé cette formation
  checkIfStarted(formationId: string): void {
    const userId = this.authService.getUserId();
    if (!userId) return;

    this.progressionService.getMesProgressions(userId).subscribe({
      next: (progressions) => {
        // On cherche une progression qui correspond à l'ID de la formation actuelle
        const existingProg = progressions.find(
          (p) => p.formation?.id === Number(formationId)
        );
        if (existingProg) {
          this.isStarted = true;
          this.progressionId = existingProg.id;
          this.progressionPourcent = existingProg.progression ?? 0;
        }
      },
      error: (err) => console.error('Erreur vérification progression', err),
    });
  }

  getImageFullUrl(path: string | undefined): string {
    if (!path) return '';
    return path.startsWith('http') ? path : `${environment.apiUrl}/${path}`;
  }

  onImageError(): void {
    this.visuelIndisponible = true;
  }

  visuelIndisponible = false;

  get hasVisuel(): boolean {
    return !!this.formation?.imageUrl && !this.visuelIndisponible;
  }

  getNiveauLabel(niveau: string | undefined): string {
    switch (niveau) {
      case 'DEBUTANT':
        return 'Débutant';
      case 'INTERMEDIAIRE':
        return 'Intermédiaire';
      case 'AVANCE':
        return 'Avancé';
      default:
        return niveau ?? '';
    }
  }

  getCoursIcon(type: string): string {
    switch (type) {
      case 'VIDEO':
        return 'fa-play-circle';
      case 'PDF':
        return 'fa-file-pdf';
      case 'PRESENTATION':
        return 'fa-desktop';
      default:
        return 'fa-file-text';
    }
  }
}
