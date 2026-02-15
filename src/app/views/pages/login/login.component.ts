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
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      identifiant: ['', [Validators.required]],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.errorMessage = null;

      const { identifiant, motDePasse } = this.loginForm.value;

      this.authService.signIn(identifiant, motDePasse).subscribe({
        next: (response) => {
          console.log('Connexion réussie !');
          this.router.navigate(['/dashboard/formations']); // Redirection après succès
        },
        error: (err) => {
          this.loading = false;
          // Utilise le message d'erreur renvoyé par le catchError de ton service
          this.errorMessage = err.message;
        },
      });
    }
  }
}
