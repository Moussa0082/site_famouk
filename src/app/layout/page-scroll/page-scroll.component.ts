import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-page-scroll',
  imports: [],
  templateUrl: './page-scroll.component.html',
  styles: ``
})
export class PageScrollComponent {
  pathLength!: number;
  progressPath!: SVGPathElement;
  offset = 50;
  duration = 550;

  @Input() progressClass: string = ''

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.progressPath = this.el.nativeElement.querySelector('.progress-wrap path');
    if (this.progressPath) {
      this.pathLength = this.progressPath.getTotalLength();
      this.progressPath.style.strokeDasharray = `${this.pathLength} ${this.pathLength}`;
      this.progressPath.style.strokeDashoffset = `${this.pathLength}`;
      this.updateProgress();
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.updateProgress();
    const progressWrap = this.el.nativeElement.querySelector('.progress-wrap');
    if (window.scrollY > this.offset) {
      progressWrap.classList.add('active-progress');
    } else {
      progressWrap.classList.remove('active-progress');
    }
  }

  updateProgress() {
    if (!this.progressPath) return;
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = this.pathLength - (scroll * this.pathLength) / height;
    this.progressPath.style.strokeDashoffset = `${progress}`;
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
