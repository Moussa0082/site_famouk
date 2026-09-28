import { Component, inject, OnInit } from '@angular/core';
import { FormationService } from '../../../service/formation.service';
import { ProgressionService } from '../../../service/progression.service';
import { AuthService } from '../../../service/auth.service';
import { FormationResponse } from '../../../models/Formation';
import { ProgressionFormationResponse } from '../../../models/Progression';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
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
  private progressionService = inject(ProgressionService);
  private authService = inject(AuthService);

  isLoading = true;
  errorMessage = '';

  searchTerm = '';
  selectedNiveau = '';
  selectedCategorie = '';

  formations: FormationResponse[] = [];
  formationsFiltrees: FormationResponse[] = [];
  categories: string[] = [];

  /** Identifiants des formations dont la vignette n'a pas pu être chargée. */
  private imagesEnEchec = new Set<number>();

  /** Progression de l'apprenant indexée par identifiant de formation. */
  private progressionsParFormation = new Map<
    number,
    ProgressionFormationResponse
  >();

  readonly niveaux = [
    { value: 'DEBUTANT', label: 'Débutant' },
    { value: 'INTERMEDIAIRE', label: 'Intermédiaire' },
    { value: 'AVANCE', label: 'Avancé' },
  ];

  ngOnInit(): void {
    this.loadFormations();
    this.loadProgressions();
  }

  loadFormations(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.formationService.afficherFormations().subscribe({
      next: (data) => {
        this.formations = data ?? [];
        this.categories = [
          ...new Set(
            this.formations.map((f) => f.categorie).filter((c): c is string => !!c)
          ),
        ].sort();
        this.applyFilters();
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage =
          'Impossible de charger les formations pour le moment.';
        console.error(err);
      },
    });
  }

  /**
   * Charge les formations déjà suivies pour afficher l'avancement sur les
   * cartes du catalogue. Un échec ici ne doit pas bloquer l'affichage.
   */
  private loadProgressions(): void {
    const userId = this.authService.getUserId();
    if (!userId) return;

    this.progressionService
      .getMesProgressions(userId)
      .pipe(catchError(() => of([] as ProgressionFormationResponse[])))
      .subscribe((progressions) => {
        this.progressionsParFormation = new Map(
          progressions
            .filter((p) => !!p.formation)
            .map((p) => [p.formation.id, p])
        );
      });
  }

  applyFilters(): void {
    const terme = this.searchTerm.trim().toLowerCase();

    this.formationsFiltrees = this.formations.filter((formation) => {
      const correspondRecherche =
        !terme ||
        formation.titre?.toLowerCase().includes(terme) ||
        formation.description?.toLowerCase().includes(terme) ||
        formation.categorie?.toLowerCase().includes(terme);

      const correspondNiveau =
        !this.selectedNiveau || formation.niveau === this.selectedNiveau;

      const correspondCategorie =
        !this.selectedCategorie ||
        formation.categorie === this.selectedCategorie;

      return correspondRecherche && correspondNiveau && correspondCategorie;
    });
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedNiveau = '';
    this.selectedCategorie = '';
    this.applyFilters();
  }

  get hasActiveFilters(): boolean {
    return !!(this.searchTerm || this.selectedNiveau || this.selectedCategorie);
  }

  getProgression(formationId: number): ProgressionFormationResponse | undefined {
    return this.progressionsParFormation.get(formationId);
  }

  getNiveauLabel(niveau: string): string {
    return this.niveaux.find((n) => n.value === niveau)?.label ?? niveau;
  }

  getImageFullUrl(imagePath: string): string {
    // Si le chemin commence déjà par http, on le garde tel quel
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    // Sinon on concatène l'URL du serveur avec le chemin relatif
    return `${environment.apiUrl}/${imagePath}`;
  }

  /**
   * Vrai lorsqu'aucune vignette exploitable n'est disponible : la carte
   * affiche alors un visuel de repli dessiné en CSS plutôt qu'une image
   * cassée.
   */
  hasVisuel(formation: FormationResponse): boolean {
    return !!formation.imageUrl && !this.imagesEnEchec.has(formation.id);
  }

  /** Mémorise les vignettes que le navigateur n'a pas pu charger. */
  onImageError(formation: FormationResponse): void {
    this.imagesEnEchec.add(formation.id);
  }

  trackById(_index: number, formation: FormationResponse): number {
    return formation.id;
  }

  reload(): void {
    this.loadFormations();
  }
}
