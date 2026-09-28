import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../../service/auth.service';

interface MenuItem {
  label: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss',
})
export class UserLayoutComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  isSidebarOpen = false;

  readonly menu: MenuItem[] = [
    { label: 'Formations', icon: 'fa fa-book', link: '/dashboard/formations' },
    {
      label: 'Mes formations',
      icon: 'fa fa-graduation-cap',
      link: '/dashboard/mes-formations',
    },
    {
      label: 'Mes certificats',
      icon: 'fa fa-award',
      link: '/dashboard/certificats',
    },
    { label: 'Profil', icon: 'fa fa-user', link: '/dashboard/profil' },
  ];

  constructor() {
    // Sur mobile, le menu doit se refermer dès qu'on change de page.
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.closeSidebar());
  }

  get displayName(): string {
    return this.authService.getDisplayName() || 'Mon compte';
  }

  get initials(): string {
    const name = this.authService.getDisplayName();
    if (!name) return 'MC';
    return name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join('');
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeSidebar();
  }

  onLogout(): void {
    // On appelle la méthode logout du service qui gère déjà
    // la suppression des tokens et la redirection vers /login
    this.authService.logout();
  }
}
