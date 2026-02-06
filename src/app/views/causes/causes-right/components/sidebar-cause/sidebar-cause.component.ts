import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-cause',
  imports: [CommonModule],
  templateUrl: './sidebar-cause.component.html',
  styles: ``
})
export class SidebarCauseComponent {
  amounts = [10, 20, 30, 40, 50];
  selectedAmount: number = 10

  selectAmount(amount: number) {
    this.selectedAmount = amount;
  }
}
