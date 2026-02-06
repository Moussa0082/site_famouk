// import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { QuizDetailComponent } from '../quiz-detail/quiz-detail.component';

// @Component({
//   selector: 'app-quiz-list',
//   standalone: true,
//   imports: [CommonModule, QuizDetailComponent],
//   templateUrl: './quiz-list.component.html',
//   styleUrls: ['./quiz-list.component.scss']
// })
// export class QuizListComponent {
//   @Input() searchTerm = '';

//   // quizzes = [
//   //   { id:1, title:'Quiz : Citoyenneté numérique', desc:'10 questions', questions: [] },
//   //   { id:2, title:'Quiz : Info ou Intox ?', desc:'12 questions', questions: [] }
//   // ];

//   // allQuestions: any = {
//   //   1: [
//   //     { q: 'Le fact-checking aide à détecter les fausses infos ?', options: ['Oui','Non'], answer: 'Oui' },
//   //     { q: 'Partager une info sans vérifier est une bonne pratique ?', options: ['Oui','Non'], answer: 'Non' },
//   //     { q: 'Vérifier la source est important ?', options: ['Oui','Non'], answer: 'Oui' }
//   //   ],
//   //   2: [
//   //     { q: 'Les images peuvent être manipulées ?', options: ['Oui','Non'], answer: 'Oui' },
//   //     { q: 'Un titre sensationnel est toujours vrai ?', options: ['Oui','Non'], answer: 'Non' }
//   //   ]
//   // };

//   // currentQuiz: any = null;

//   // get filteredQuizzes(){
//   //   const s = (this.searchTerm||'').toLowerCase();
//   //   return this.quizzes.filter(q => !s || (q.title + ' ' + q.desc).toLowerCase().includes(s));
//   // }

//   // start(q:any){
//   //   q.questions = this.allQuestions[q.id] || [];
//   //   this.currentQuiz = q;
//   // }

//   // close(){ this.currentQuiz = null; }
//   filteredQuizzes = [
//     {
//       title: 'Quiz sur la Sécurité Numérique',
//       desc: 'Testez vos connaissances sur la protection en ligne.',
//       image: 'assets/img/quizzes/security.jpg',
//       duration: 5,
//       questions: 8
//     },
//     {
//       title: 'Citoyenneté Digitale',
//       desc: 'Connaissez-vous vos droits et devoirs numériques ?',
//       image: 'assets/img/quizzes/citoyennete.jpg',
//       duration: 7,
//       questions: 10
//     }
//   ];
  
// }

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent {
  constructor(private router: Router) {}
  @Input() searchTerm = ''; // ✅ must be here

  quizzes = [
    {
      id: 1,
      title: 'Quiz sur la Sécurité Numérique',
      desc: 'Testez vos connaissances sur la protection en ligne.',
      image: 'assets/img/quizzes/security.jpg',
      duration: 5,
      questions: 8
    },
    {
      id: 2,
      title: 'Citoyenneté Digitale',
      desc: 'Connaissez-vous vos droits et devoirs numériques ?',
      image: 'assets/img/quizzes/citoyennete.jpg',
      duration: 7,
      questions: 10
    }
  ];

  openDetail(q: any) {
    this.router.navigate(['/quiz', q.id]); // 👉 redirige vers page de détail
  }
}
