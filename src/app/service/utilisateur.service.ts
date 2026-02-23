import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponseDTO } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  private readonly apiUrl = `${environment.apiUrl}/apprenant`;

  constructor(private http: HttpClient) {}

  getApprenant(id: string): Observable<UserResponseDTO> {
    return this.http.get<UserResponseDTO>(`${this.apiUrl}/${id}`);
  }
}
