import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { BlogResponse } from '../models/Blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private serviceUrl: string;
  private baseUrl: string = 'blogs';

  constructor(private http: HttpClient) {
    this.serviceUrl = environment.apiUrl;
  }

  getAllBlogs(): Observable<BlogResponse[]> {
    return this.http.get<BlogResponse[]>(`${this.serviceUrl}/${this.baseUrl}`);
  }

  getBlogByCategory(idCategorie: string): Observable<BlogResponse[]> {
    return this.http.get<BlogResponse[]>(
      `${this.serviceUrl}/${this.baseUrl}/getBlogByCategory/${idCategorie}`
    );
  }

  getBlogById(id: string): Observable<BlogResponse> {
    return this.http.get<BlogResponse>(
      `${this.serviceUrl}/${this.baseUrl}/${id}`
    );
  }
}
