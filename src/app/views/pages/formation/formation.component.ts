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
import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../component/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { ElearningListComponent } from '../elearning-list/elearning-list.component';
import { QuizListComponent } from '../quiz-list/quiz-list.component';
import { WebinarListComponent } from '../webinar-list/webinar-list.component';
import { Router } from '@angular/router';


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
  imports: [BreadcrumbComponent,CommonModule, FormsModule , ElearningListComponent, QuizListComponent, WebinarListComponent],
  selector: 'app-formation',
  standalone:true,
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent {
  causes = causes;
  selectedTab = 'elearning';
  searchTerm = '';
  tabs = [
    { id: 'elearning', label: 'E-learning' },
    { id: 'quiz', label: 'Quiz & Certification' },
    { id: 'webinar', label: 'Webinaires' }
  ];


  selectTab(id: string) { this.selectedTab = id; }

  formations = [
    {
      title: 'Développement Web Full Stack',
      description: 'Apprenez à créer des applications web modernes avec Angular, Node.js et MongoDB.',
      image: 'assets/img/formation/f_d.png',
      category: 'Programmation',
      level: 'Débutant à Avancé',
      duration: '6 semaines',
      link: '#'
    },
    {
      title: 'Cybersécurité et Protection des Données',
      description: 'Découvrez comment sécuriser les systèmes, les réseaux et les données sensibles.',
      image: 'assets/img/formation/OG-Social-SaS-Cybersecurity.jpg',
      category: 'Sécurité Informatique',
      level: 'Intermédiaire',
      duration: '4 semaines',
      link: '#'
    },
    {
      title: 'Intelligence Artificielle et Machine Learning',
      description: 'Maîtrisez les bases de l’IA et entraînez vos premiers modèles de machine learning.',
      image: 'assets/img/formation/ia-tool-1.jpg',
      category: 'Data Science',
      level: 'Avancé',
      duration: '8 semaines',
      link: '#'
    },
    {
      title: 'Développement Mobile avec Flutter',
      description: 'Créez des applications mobiles performantes pour Android et iOS avec Flutter.',
      image: 'assets/img/formation/flutter_dev.jpeg',
      category: 'Mobile',
      level: 'Débutant à Intermédiaire',
      duration: '5 semaines',
      link: '#'
    },
    {
      title: 'Administration Systèmes et Réseaux',
      description: 'Apprenez à gérer des infrastructures serveurs, Linux et Cloud.',
      image: 'assets/img/formation/reseau-informatique.jpg',
      category: 'Infrastructure',
      level: 'Intermédiaire',
      duration: '6 semaines',
      link: '#'
    },
    {
      title: 'Cloud Computing & DevOps',
      description: 'Découvrez les outils et pratiques DevOps, Docker, Kubernetes et AWS.',
      image: 'assets/img/formation/cloud-computing.png',
      category: 'Cloud',
      level: 'Avancé',
      duration: '7 semaines',
      link: '#'
    }
  ];



  // 🔹 Modules
  modules = [
    { title: 'Angular Avancé', duration: '3h', type: 'Vidéo', image: 'assets/img/module1.jpg' },
    { title: 'Spring Boot Débutant', duration: '4h', type: 'Texte', image: 'assets/img/module2.jpg' },
    { title: 'Quiz Sécurité', duration: '1h', type: 'Quiz', image: 'assets/img/module3.jpg' },
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
            { text: 'Python', correct: false }
          ]
        },
        {
          question: 'Le data binding peut être ?',
          answers: [
            { text: 'Unidirectionnel', correct: true },
            { text: 'Bidirectionnel', correct: true },
            { text: 'Aucun', correct: false }
          ]
        }
      ]
    }
  ];

  activeQuiz: any = null;
  selectedAnswers = new Map();
  quizResult: any = null;

  // 🔹 Webinaires
  webinars = [
    { title: 'Live Angular', date: new Date(), platform: 'Zoom', link: '#' },
    { title: 'Webinar Spring Boot', date: new Date(), platform: 'WebRTC', link: '#' },
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
    this.quizResult = { quiz: this.activeQuiz, score, passed: score >= Math.ceil(this.activeQuiz.questions.length / 2) };
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