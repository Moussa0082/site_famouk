import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormationResponse } from '../models/Formation';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  private apiUrl = `${environment.apiUrl}/formation`;

  constructor(private http: HttpClient) {}

  afficherFormations(): Observable<FormationResponse[]> {
    return this.http.get<FormationResponse[]>(this.apiUrl);
  }

  getFormationById(id: string): Observable<FormationResponse> {
    return this.http.get<FormationResponse>(`${this.apiUrl}/${id}`);
  }
}
