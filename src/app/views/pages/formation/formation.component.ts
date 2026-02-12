// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { BreadcrumbComponent } from '../../../component/breadcrumb/breadcrumb.component';
import { causes } from '../../causes/data';

// @Component({
//   selector: 'app-formation',
//   imports: [BreadcrumbComponent,CommonModule],
//   templateUrl: './formation.component.html',
//   styleUrl: './formation.component.scss'
// })
// export class FormationComponent {
// causes = causes
// }

import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../component/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { ElearningListComponent } from '../elearning-list/elearning-list.component';
import { QuizListComponent } from '../quiz-list/quiz-list.component';
import { WebinarListComponent } from '../webinar-list/webinar-list.component';
import { Router } from '@angular/router';
import { FormationResponse } from '../../../models/Formation';
import { FormationService } from '../../../service/formation.service';
import { environment } from '../../../../environments/environment';
import { HeadImageService } from '../../../service/head-image.service';
import { HeadImage } from '../../../models/HeadImage';
import { catchError, map, of } from 'rxjs';

// @Component({
//   selector: 'app-formation',
//   standalone: true,
//   imports: [CommonModule, BreadcrumbComponent],
//   templateUrl: './formation.component.html',
//   styleUrls: ['./formation.component.scss']
// })
// export class FormationComponent {
//   tabs = ['E-learning', 'Quiz & Certifications', 'Webinaires'];
//   activeTab = 'E-learning';
//   selectedModule: any = null;

//   eLearningModules = [
//     {
//       title: 'Culture numérique et citoyenneté',
//       description: 'Découvre comment utiliser le numérique pour t’impliquer dans la société et défendre tes droits.',
//       image: 'assets/img/elearning/citoyennete.jpg',
//       category: 'Citoyenneté',
//       pdf: 'assets/docs/citoyennete.pdf',
//       video: 'https://www.youtube.com/watch?v=abcd1234'
//     },
//     {
//       title: 'Fake News & Désinformation',
//       description: 'Apprends à repérer les infox et à vérifier les sources sur les réseaux sociaux.',
//       image: 'assets/img/elearning/fakenews.jpg',
//       category: 'Éducation aux médias',
//       pdf: 'assets/docs/fakenews.pdf',
//       video: 'https://www.youtube.com/watch?v=fake1234'
//     },
//     {
//       title: 'Initiation à la cybersécurité',
//       description: 'Protège-toi en ligne : mots de passe, confidentialité, et sécurité sur mobile.',
//       image: 'assets/img/elearning/cyber.jpg',
//       category: 'Tech & Sécurité',
//       pdf: '',
//       video: 'https://www.youtube.com/watch?v=efgh5678'
//     }
//   ];

//   quizzes = [
//     {
//       title: 'Quiz : Citoyenneté numérique',
//       description: 'Teste ta connaissance du numérique responsable.',
//       questions: 10,
//       duration: 15
//     },
//     {
//       title: 'Quiz : Info ou Intox ?',
//       description: 'Distingue les vraies informations des fake news.',
//       questions: 12,
//       duration: 20
//     },
//     {
//       title: 'Quiz : Sécurité en ligne',
//       description: 'Sauras-tu reconnaître les bonnes pratiques de cybersécurité ?',
//       questions: 15,
//       duration: 25
//     }
//   ];

//   webinaires = [
//     {
//       title: 'Citoyenneté et Réseaux Sociaux',
//       description: 'Comment s’exprimer en ligne sans nuire et encourager un débat constructif.',
//       date: new Date('2025-10-20'),
//       presenter: 'Aïssata Koné'
//     },
//     {
//       title: 'Jeunes & Innovation Tech au Mali',
//       description: 'Discussion ouverte avec des jeunes innovateurs maliens.',
//       date: new Date('2025-11-05'),
//       presenter: 'Souleymane Diarra'
//     },
//     {
//       title: 'Lutte contre la désinformation',
//       description: 'Session interactive sur les outils de vérification d’information.',
//       date: new Date('2025-11-18'),
//       presenter: 'Moussa Bane'
//     }
//   ];

//   openDetail(module: any) {
//     this.selectedModule = module;
//   }
// }
@Component({
  imports: [
    BreadcrumbComponent,
    CommonModule,
    FormsModule,
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
        console.log('Formations récupérées :', data);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = 'Erreur lors de la récupération des données.';
        console.error(err);
      },
    });
  }

  getFormationImage(event: FormationResponse): string {
    // 1. Vérifier si le blog possède des médias
    if (event.media && event.media.length > 0) {
      const firstMedia = event.media[0];

      // 2. Vérifier si webPath existe (généré par ton @Transient Java)
      if (firstMedia.webPath) {
        // On retourne l'URL complète vers ton backend
        // Rappel : Ton MvcConfig Spring mappe "/images/**" vers ton dossier Desktop
        return `${environment.apiUrl}${firstMedia.webPath}`;
      }
    }
    // 3. Image de secours (Placeholder) si pas de média ou erreur
    return 'assets/img/theme/img-1-1000x600.jpg';
  }

  reload(): void {
    this.loadFormations();
  }

  // 🔹 Modules
  modules = [
    {
      title: 'Angular Avancé',
      duration: '3h',
      type: 'Vidéo',
      image: 'assets/img/module1.jpg',
    },
    {
      title: 'Spring Boot Débutant',
      duration: '4h',
      type: 'Texte',
      image: 'assets/img/module2.jpg',
    },
    {
      title: 'Quiz Sécurité',
      duration: '1h',
      type: 'Quiz',
      image: 'assets/img/module3.jpg',
    },
  ];

  // 🔹 Quiz
  quizzes = [
    {
      title: 'Quiz Angular',
      description: 'Testez vos connaissances Angular',
      questions: [
        {
          question: 'Angular est basé sur quel langage ?',
          answers: [
            { text: 'JavaScript', correct: false },
            { text: 'TypeScript', correct: true },
            { text: 'Python', correct: false },
          ],
        },
        {
          question: 'Le data binding peut être ?',
          answers: [
            { text: 'Unidirectionnel', correct: true },
            { text: 'Bidirectionnel', correct: true },
            { text: 'Aucun', correct: false },
          ],
        },
      ],
    },
  ];

  activeQuiz: any = null;
  selectedAnswers = new Map();
  quizResult: any = null;

  // 🔹 Webinaires
  webinars = [
    { title: 'Live Angular', date: new Date(), platform: 'Zoom', link: '#' },
    {
      title: 'Webinar Spring Boot',
      date: new Date(),
      platform: 'WebRTC',
      link: '#',
    },
  ];

  rawTextContent = `Nos formations couvrent les dernières technologies et méthodes de développement.
  Elles incluent des modules vidéos, textes, quiz interactifs et webinaires en direct avec replay.`;

  // 🔹 Quiz logic
  startQuiz(quiz: any) {
    this.activeQuiz = quiz;
    this.selectedAnswers.clear();
    this.quizResult = null;
  }

  selectAnswer(question: any, answer: any) {
    this.selectedAnswers.set(question, answer);
  }

  submitQuiz() {
    if (!this.activeQuiz) return;
    let score = 0;
    for (let q of this.activeQuiz.questions) {
      const selected = this.selectedAnswers.get(q);
      if (selected && selected.correct) score++;
    }
    this.quizResult = {
      quiz: this.activeQuiz,
      score,
      passed: score >= Math.ceil(this.activeQuiz.questions.length / 2),
    };
  }

  // 🔹 PDF + QR code
  // async downloadCertificate() {
  //   const doc = new jsPDF();
  //   const text = 'Certificat de réussite - Formation en Technologie';
  //   doc.setFontSize(16);
  //   doc.text(text, 20, 20);

  //   const qrData = 'https://mon-site.com/certificat?id=12345';
  //   const qrImage = await QRCode.toDataURL(qrData);
  //   doc.addImage(qrImage, 'PNG', 20, 30, 50, 50);

  //   doc.save('certificat.pdf');
  // }
}
