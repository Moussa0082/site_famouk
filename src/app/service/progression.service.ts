import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {
  DemarrerFormationRequest,
  ProgressionFormationResponse,
} from '../models/Progression';

@Injectable({
  providedIn: 'root',
})
export class ProgressionService {
  private http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/progressions`;

  /**
   * Démarre une nouvelle formation (POST /progressions/formations/{userId})
   */
  demarrerFormation(
    userId: string,
    request: DemarrerFormationRequest
  ): Observable<ProgressionFormationResponse> {
    return this.http.post<ProgressionFormationResponse>(
      `${this.apiUrl}/formations/${userId}`,
      request
    );
  }

  /**
   * Récupère toutes les progressions (GET /progressions/formations/user/{userId})
   */
  getMesProgressions(
    userId: string
  ): Observable<ProgressionFormationResponse[]> {
    return this.http.get<ProgressionFormationResponse[]>(
      `${this.apiUrl}/formations/user/${userId}`
    );
  }

  /**
   * Récupère les formations en cours (GET /progressions/formations/en-cours/{userId})
   */
  getFormationsEnCours(
    userId: string
  ): Observable<ProgressionFormationResponse[]> {
    return this.http.get<ProgressionFormationResponse[]>(
      `${this.apiUrl}/formations/en-cours/${userId}`
    );
  }

  /**
   * Récupère les formations terminées (GET /progressions/formations/terminees/{userId})
   */
  getFormationsTerminees(
    userId: string
  ): Observable<ProgressionFormationResponse[]> {
    return this.http.get<ProgressionFormationResponse[]>(
      `${this.apiUrl}/formations/terminees/${userId}`
    );
  }

  /**
   * Récupère un détail spécifique (GET /progressions/formations/{progressionId})
   */
  getProgression(
    progressionId: number
  ): Observable<ProgressionFormationResponse> {
    return this.http.get<ProgressionFormationResponse>(
      `${this.apiUrl}/formations/${progressionId}`
    );
  }

  /**
   * Met à jour la progression (PUT /progressions/formations/{progressionId})
   */
  mettreAJourProgression(
    progressionId: number
  ): Observable<ProgressionFormationResponse> {
    return this.http.put<ProgressionFormationResponse>(
      `${this.apiUrl}/formations/${progressionId}`,
      {}
    );
  }

  /**
   * Récupère les statistiques (GET /progressions/stats?userId=...)
   * Note : Ta méthode Backend utilise toujours @RequestParam pour celle-ci
   */
  getProgressionStats(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/stats`, {
      params: { userId },
    });
  }
}
