import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.scss']
})
export class QuizDetailComponent {
  @Input() quiz: any;
  @Output() close = new EventEmitter<void>();

  index = 0;
  selected: string | null = null;
  score = 0;
  finished = false;

  get current() { return this.quiz.questions[this.index]; }

  pick(opt: string) { this.selected = opt; }

  next(){
    if(!this.selected) return;
    if(this.selected === this.current.answer) this.score++;
    this.selected = null;
    this.index++;
    if(this.index >= this.quiz.questions.length) {
      this.finished = true;
      // small animation delay or additional UI can be added here
    }
  }

  restart(){
    this.index = 0; this.selected = null; this.score = 0; this.finished = false;
  }
}
