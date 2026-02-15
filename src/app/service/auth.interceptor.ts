import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { catchError, switchMap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  // 1. Ne pas intercepter les requêtes d'authentification
  if (req.url.includes('/auth/refresh') || req.url.includes('/auth/login')) {
    return next(req);
  }

  const token = authService.getAccessToken();
  let authReq = req;

  // 2. Ajouter le token si présent
  if (token) {
    authReq = addToken(req, token);
  }

  // 3. Envoyer la requête et gérer l'erreur 401 (Token expiré)
  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        return authService.refreshToken().pipe(
          switchMap((tokens) => {
            // Re-tenter la requête initiale avec le nouveau token
            return next(addToken(req, tokens.accessToken));
          }),
          catchError((err) => {
            // Si le refresh échoue aussi, on déconnecte
            authService.logout();
            return throwError(() => err);
          })
        );
      }
      return throwError(() => error);
    })
  );
};

// Fonction utilitaire (hors de l'export car c'est une fonction pure)
function addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
  return request.clone({
    setHeaders: { Authorization: `Bearer ${token}` },
  });
}
