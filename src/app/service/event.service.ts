import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { EventResponse } from '../models/Event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private serviceUrl: string;
  private baseUrl: string = 'event';
  constructor(private http: HttpClient) {
    this.serviceUrl = environment.apiUrl;
  }

  getActiveEvents(): Observable<EventResponse[]> {
    return this.http.get<EventResponse[]>(
      `${this.serviceUrl}/${this.baseUrl}/active`
    );
  }

  getEventById(idEvent: string): Observable<EventResponse> {
    return this.http.get<EventResponse>(
      `${this.serviceUrl}/${this.baseUrl}/${this.baseUrl}/${idEvent}`
    );
  }
}
