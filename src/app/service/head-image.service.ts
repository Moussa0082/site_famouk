import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeadImageService {
  private serviceUrl: string;
  private baseUrl: string = 'headImage';

  constructor(private http: HttpClient) {
    this.serviceUrl = environment.apiUrl;
  }

  getHeadImageByPage(pageName: string): Observable<any> {
    return this.http.get(`${this.serviceUrl}/${this.baseUrl}/page/${pageName}`);
  }
}
