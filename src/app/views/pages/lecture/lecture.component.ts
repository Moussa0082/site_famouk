import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgressionService } from '../../../service/progression.service';
import { ModuleService } from '../../../service/module.service';
import { CoursService } from '../../../service/cours.service';
import { ProgressionFormationResponse } from '../../../models/Progression';
import { ModuleResponse } from '../../../models/Module';
import { CoursResponseDTO } from '../../../models/Cours';

interface ModuleUI extends ModuleResponse {
  isOpen: boolean;
  cours?: CoursResponseDTO[];
  isLessonsLoading?: boolean;
}

@Component({
  selector: 'app-lecture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lecture.component.html',
  styleUrl: './lecture.component.scss',
})
export class LectureComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private progressionService = inject(ProgressionService);
  private moduleService = inject(ModuleService);
  private coursService = inject(CoursService);

  progression: ProgressionFormationResponse | null = null;
  // On utilise ModuleUI pour bénéficier des propriétés isOpen et cours
  modules: ModuleUI[] = [];
  currentCours: CoursResponseDTO | null = null;
  isLoading = true;

  ngOnInit() {
    const progressionId = this.route.snapshot.paramMap.get('id');
    if (progressionId) {
      this.loadProgression(Number(progressionId));
    }
  }

  loadProgression(id: number) {
    this.progressionService.getProgression(id).subscribe({
      next: (data) => {
        this.progression = data;
        this.loadModules(data.formation.id);
      },
      error: (err) => console.error(err),
    });
  }

  loadModules(formationId: number) {
    this.moduleService.getModulesByFormation(formationId).subscribe((mods) => {
      // On initialise chaque module avec isOpen: false
      this.modules = mods.map((m) => ({ ...m, isOpen: false }));
      this.isLoading = false;

      // Optionnel : Ouvrir le premier module automatiquement
      if (this.modules.length > 0) {
        this.toggleModule(0);
      }
    });
  }

  toggleModule(index: number) {
    const module = this.modules[index];
    module.isOpen = !module.isOpen;

    // On ne charge les cours que s'ils ne sont pas déjà chargés
    if (module.isOpen && (!module.cours || module.cours.length === 0)) {
      this.loadCoursForModule(index);
    }
  }

  loadCoursForModule(index: number) {
    const module = this.modules[index];
    module.isLessonsLoading = true;

    this.coursService.getCoursByModule(module.id).subscribe({
      next: (data) => {
        // Tri par ordre et stockage dans le module spécifique
        module.cours = data.sort((a, b) => (a.ordre || 0) - (b.ordre || 0));
        module.isLessonsLoading = false;

        // Si aucun cours n'est sélectionné, on prend le premier du premier module chargé
        if (!this.currentCours && module.cours.length > 0) {
          this.selectCours(module.cours[0]);
        }
      },
      error: (err) => {
        console.error('Erreur cours:', err);
        module.isLessonsLoading = false;
      },
    });
  }

  selectCours(cours: CoursResponseDTO) {
    this.currentCours = cours;
  }
}
