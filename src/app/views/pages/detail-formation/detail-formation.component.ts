import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  imports: [CommonModule],
  templateUrl: './detail-formation.component.html',
  styleUrl: './detail-formation.component.scss',
})
export class DetailFormationComponent {
  lireCours(_t55: CoursResponseDTO) {
    throw new Error('Method not implemented.');
  }
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private formationService = inject(FormationService);
  private courService = inject(CoursService);
  private moduleService = inject(ModuleService);
  private progressionService = inject(ProgressionService);
  private authService = inject(AuthService);

  // CORRECTION ICI : Utilise ModuleUI[] au lieu de ModuleResponse[]
  modules: ModuleUI[] = [];
  Cours: CoursResponseDTO[] = [];
  formation: FormationResponse | null = null;
  isLoading = true;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadData(id);
    }
  }

  loadData(id: string) {
    this.isLoading = true;
    this.formationService.getFormationById(id).subscribe({
      next: (data) => {
        this.formation = data;
        this.loadModules(Number(id));
      },
      error: (err) => {
        console.error('Erreur formation', err);
        this.isLoading = false;
      },
    });
  }

  loadModules(formationId: number) {
    this.moduleService.getModulesByFormation(formationId).subscribe({
      next: (data) => {
        // On transforme les données du backend en données UI
        this.modules = data
          .map((m) => ({
            ...m,
            isOpen: false,
          }))
          .sort((a, b) => a.ordre - b.ordre);

        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur modules', err);
        this.isLoading = false;
      },
    });
  }

  toggleModule(index: number) {
    const module = this.modules[index];
    if (!module) return;

    module.isOpen = !module.isOpen;
    // Si on ouvre le module et que les cours n'ont pas encore été chargés
    if (module.isOpen && (!module.cours || module.cours.length === 0)) {
      this.loadCoursForModule(index);
    }
  }

  loadCoursForModule(index: number) {
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

  getImageFullUrl(path: string | undefined) {
    return path
      ? `${environment.apiUrl}/${path}`
      : 'assets/images/default-formation.jpg';
  }

  demarrerFormation() {
    const userId = this.authService.getUserId(); // Récupère l'ID du user
    if (!userId || !this.formation) {
      alert('Vous devez être connecté pour démarrer cette formation.');
      this.router.navigate(['/login']);
      return;
    }
    const request: DemarrerFormationRequest = {
      formationId: this.formation!.id,
    };

    this.progressionService.demarrerFormation(userId, request).subscribe({
      next: (progression) => {
        console.log('Formation démarrée !', progression);
        this.router.navigate(['/dashboard/mes-formations', progression.id]);
      },
      error: (err) => {
        console.error("Erreur d'inscription", err);
        alert('Une erreur est survenue lors du démarrage.');
      },
    });
  }
}
