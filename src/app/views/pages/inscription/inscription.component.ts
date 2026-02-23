import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss',
})
export class InscriptionComponent {
  signupForm: FormGroup;
  loading = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]{8,}$')]],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onRegister() {
    if (this.signupForm.valid) {
      this.loading = true;
      this.errorMessage = null;

      // On prépare les données en ajoutant le rôle par défaut
      const signupData = {
        ...this.signupForm.value,
        role: 'APPRENANT',
      };

      this.authService.signUp(signupData).subscribe({
        next: (user) => {
          this.successMessage =
            'Inscription réussie ! Vous allez être redirigé.';
          setTimeout(() => {
            this.router.navigate(['/login']); // Redirection vers la connexion
          }, 2000);
        },
        error: (err) => {
          this.loading = false;
          this.errorMessage =
            "Erreur lors de l'inscription. L'email est peut-être déjà utilisé.";
        },
      });
    }
  }
}
