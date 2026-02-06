import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import { GsapService } from '../service/gsap.service';

@Directive({
  selector: '[appGsapReveal]',
})

export class GsapRevealDirective implements AfterViewInit {
  constructor(private el: ElementRef, private gsapService: GsapService) {}

  ngAfterViewInit(): void {
    this.gsapService.animateReveal(this.el.nativeElement);
  }
}
