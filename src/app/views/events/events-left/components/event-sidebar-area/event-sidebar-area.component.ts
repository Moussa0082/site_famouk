import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-sidebar-area',
  imports: [CommonModule,RouterLink],
  templateUrl: './event-sidebar-area.component.html',
  styles: ``
})
export class EventSidebarAreaComponent {
  amounts = [10, 20, 30, 40, 50];
  selectedAmount: number = 10

  selectAmount(amount: number) {
    this.selectedAmount = amount;
  }
}
