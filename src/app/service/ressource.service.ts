import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Ressource } from '../models/Ressource';

@Injectable({
  providedIn: 'root',
})
export class RessourceService {
  private http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/ressource`;

  getAllRessources(): Observable<Ressource[]> {
    return this.http.get<Ressource[]>(this.apiUrl);
  }

  getRessourceById(id: string): Observable<Ressource> {
    return this.http.get<Ressource>(`${this.apiUrl}/${id}`);
  }
}
