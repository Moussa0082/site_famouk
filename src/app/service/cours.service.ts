import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  CoursRequestDTO,
  CoursResponseDTO,
  TypeContenu,
} from '../models/Cours';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursService {
  private http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/cours`;

  getCoursById(id: number): Observable<CoursResponseDTO> {
    return this.http.get<CoursResponseDTO>(`${this.apiUrl}/${id}`);
  }

  /**
   * Récupère tous les cours d'un module
   * GET /cours?moduleId=...
   */
  getCoursByModule(moduleId: number): Observable<CoursResponseDTO[]> {
    const params = new HttpParams().set('moduleId', moduleId.toString());
    return this.http.get<CoursResponseDTO[]>(this.apiUrl, { params });
  }

  /**
   * Récupère les cours par type de contenu
   * GET /cours/type/{typeContenu}
   */
  getCoursByType(type: TypeContenu): Observable<CoursResponseDTO[]> {
    return this.http.get<CoursResponseDTO[]>(`${this.apiUrl}/type/${type}`);
  }

  /**
   * Réorganise les cours d'un module
   * PUT /cours/reorder?moduleId=...
   */
  reorderCours(moduleId: number, coursIds: number[]): Observable<void> {
    const params = new HttpParams().set('moduleId', moduleId.toString());
    return this.http.put<void>(`${this.apiUrl}/reorder`, coursIds, { params });
  }
}
