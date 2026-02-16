import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgressionService } from '../../../service/progression.service';
import { ModuleService } from '../../../service/module.service';
import { CoursService } from '../../../service/cours.service';
import { ProgressionFormationResponse } from '../../../models/Progression';
import { ModuleResponse } from '../../../models/Module';
import { CoursResponseDTO } from '../../../models/Cours';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ProgressionCoursService } from '../../../service/progression-cours.service';
import { AuthService } from '../../../service/auth.service';
import { QuizService } from '../../../service/quiz.service';
import { QuestionService } from '../../../service/question.service';
import {
  QuizResponseDTO,
  ReponseUtilisateurRequestDTO,
} from '../../../models/Quiz';
import { QuestionResponseDTO } from '../../../models/Question';

interface ModuleUI extends ModuleResponse {
  isOpen: boolean;
  cours?: CoursResponseDTO[];
  quiz?: QuizResponseDTO | null;
  questions?: QuestionResponseDTO[];
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
  private sanitizer = inject(DomSanitizer);
  private route = inject(ActivatedRoute);
  private progressionService = inject(ProgressionService);
  private moduleService = inject(ModuleService);
  private coursService = inject(CoursService);
  private quizService = inject(QuizService);
  private questionService = inject(QuestionService);
  private progCoursService = inject(ProgressionCoursService);
  private authService = inject(AuthService);

  progression: ProgressionFormationResponse | null = null;
  // On utilise ModuleUI pour bénéficier des propriétés isOpen et cours
  reponsesSelectionnees: { [key: number]: number } = {};
  reponsesSaisies: { [key: number]: { optionId?: number; texte?: string } } =
    {};
  resultatTentative: any = null;
  modules: ModuleUI[] = [];
  currentCours: CoursResponseDTO | null = null;
  isLoading = true;
  currentQuiz: QuizResponseDTO | null = null;
  showQuiz = false;

  constructor(private router: Router) {}

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
        module.cours = data.sort((a, b) => (a.ordre || 0) - (b.ordre || 0));
        module.isLessonsLoading = false;

        // Si la progression est déjà >= 80, on précharge le quiz du module
        if (this.isModuleFinished(module)) {
          this.loadQuizForModule(module);
        }
        // -------------------------

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

  getSafeVideoUrl(url: string): SafeResourceUrl {
    if (!url) return '';

    let embedUrl = url;

    // Conversion automatique du lien "watch" en lien "embed"
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  // Vérifie si la vidéo est un fichier local ou un lien externe
  isVideoExternal(url: string): boolean {
    return (
      url.startsWith('http') || url.includes('youtube') || url.includes('vimeo')
    );
  }

  selectCours(cours: CoursResponseDTO) {
    this.currentCours = cours;
  }

  validerLeconActuelle() {
    const userId = this.authService.getUserId();
    const currentProgressionId = this.progression?.id; // Sécurité

    if (this.currentCours && userId && currentProgressionId) {
      this.progCoursService
        .marquerCoursCommeVu(this.currentCours.id, userId.toString())
        .subscribe({
          next: (res) => {
            if (res.success) {
              this.progressionService
                .getProgression(currentProgressionId)
                .subscribe((data) => {
                  this.progression = data;

                  const parentModule = this.modules.find((m) =>
                    m.cours?.some((c) => c.id === this.currentCours?.id)
                  );

                  if (parentModule && this.isModuleFinished(parentModule)) {
                    this.loadQuizForModule(parentModule);
                  }
                });
            }
          },
          error: (err) => console.error(err), // Ne pas oublier de gérer l'erreur ici aussi
        });
    }
  }

  private refreshGlobalProgression() {
    if (this.progression) {
      this.loadProgression(this.progression.id);
    }
  }

  private loadQuizForModule(module: ModuleUI) {
    this.quizService.getQuizByModule(module.id).subscribe((quiz) => {
      if (quiz) {
        module.quiz = quiz;
        this.questionService
          .getQuestionsByQuiz(quiz.id)
          .subscribe((questions) => {
            module.questions = questions;
            this.displayQuiz(module);
          });
      }
    });
  }
  displayQuiz(module: ModuleUI) {
    if (module.quiz) {
      this.currentQuiz = module.quiz;
      this.currentCours = null; // Désactive le mode cours
      this.showQuiz = true; // Active le mode quiz
    } else {
      // Si le quiz n'est pas encore chargé en mémoire, on le charge
      this.loadQuizForModule(module);
    }
  }

  isModuleFinished(module: ModuleUI): boolean {
    if (!this.progression) return false;

    const isGlobalProgressHighEnough = this.progression.progression >= 80;

    return isGlobalProgressHighEnough;
  }

  choisirReponse(questionId: number, optionId: number) {
    this.reponsesSelectionnees[questionId] = optionId;
  }

  validerQuiz() {
    const userId = this.authService.getUserId()?.toString();
    const quizId = this.currentQuiz?.id;

    if (!userId || !quizId) return;

    const reponsesPayload: ReponseUtilisateurRequestDTO[] = Object.keys(
      this.reponsesSaisies
    ).map((qIdStr) => {
      const qId = Number(qIdStr);
      const saisie = this.reponsesSaisies[qId];

      return {
        questionId: qId,
        reponseOptionId: saisie.optionId || undefined, // On envoie l'ID si c'est un QCM
        reponseTexte: saisie.texte || '', // On envoie le texte si c'est une réponse courte
      };
    });

    this.quizService.soumettreQuiz(userId, quizId, reponsesPayload).subscribe({
      next: (tentative) => {
        this.resultatTentative = tentative;
        // if (tentative.reussi) this.refreshGlobalProgression();
        if (tentative.reussi) {
          // On rafraîchit la progression pour savoir si la formation est finie
          this.progressionService
            .getProgression(this.progression!.id)
            .subscribe((data) => {
              this.progression = data;
              // On peut vérifier si data.progression === 100
            });
        }
      },
      error: (err) => alert(err.error?.message || 'Erreur de soumission'),
    });
  }

  fermerModal() {
    const reussi = this.resultatTentative?.reussi;
    this.resultatTentative = null; // Ferme la modal

    if (reussi) {
      this.showQuiz = false; // Retourne aux cours si réussi
      this.currentQuiz = null;
    }
  }

  choisirOption(questionId: number, optionId: number) {
    this.reponsesSaisies[questionId] = { optionId };
  }

  // Pour les réponses courtes (lié à un <input> ou <textarea>)
  saisirTexte(questionId: number, event: any) {
    const texte = event.target.value;
    this.reponsesSaisies[questionId] = { texte };
  }

  allerAuxCertificats() {
    this.fermerModal(); // Ferme la modal avant de partir
    this.router.navigate(['/dashboard/certificats']);
  }
}
