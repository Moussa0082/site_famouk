import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss',
})
export class UserLayoutComponent {
  private authService = inject(AuthService);

  onLogout(): void {
    // On appelle la méthode logout du service qui gère déjà
    // la suppression des tokens et la redirection vers /login
    this.authService.logout();
  }
}
