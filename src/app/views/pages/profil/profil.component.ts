import { Component, inject, OnInit } from '@angular/core';
import { UserResponseDTO } from '../../../models/User';
import { UtilisateurService } from '../../../service/utilisateur.service';
import { AuthService } from '../../../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss',
})
export class ProfilComponent implements OnInit {
  private authService = inject(AuthService);
  private utilisateurService = inject(UtilisateurService);

  utilisateur?: UserResponseDTO | null;

  ngOnInit() {
    const userId = this.authService.getUserId();
    if (userId) {
      this.utilisateurService.getApprenant(userId).subscribe({
        next: (user) => {
          this.utilisateur = user;
          console.log('Infos utilisateur chargées pour le certificat', user);
        },
        error: (err) => console.error('Erreur chargement utilisateur', err),
      });
    }
  }
}
