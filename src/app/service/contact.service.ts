import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Contact } from '../models/Contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private http = inject(HttpClient);

  private readonly apiUrl = `${environment.apiUrl}/contact`;

  bookContact(contact: Contact): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl, contact);
  }
}
