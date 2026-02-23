import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProgressionCoursResponseDTO } from '../models/ProgressionCoursResponseDTO';

export interface MarquerVuResponse {
  success: boolean;
  message: string;
  progressionCoursId: number;
  coursId: number;
  vu: boolean;
  dateVu: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProgressionCoursService {
  private http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/progressions/cours`;

  /**
   * Marque un cours comme vu pour l'utilisateur
   * PUT /progressions/cours/marquer-vu/{coursId}/{userId}
   */
  marquerCoursCommeVu(
    coursId: number,
    userId: string
  ): Observable<MarquerVuResponse> {
    return this.http.put<MarquerVuResponse>(
      `${this.apiUrl}/marquer-vu/${coursId}/${userId}`,
      {}
    );
  }
}
