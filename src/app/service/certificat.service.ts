import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface CertificatResponse {
  id: number;
  numCertificat: string;
  dateEmission: string;
  urlPdf: string;
  nomUtilisateur: string;
  prenomUtilisateur: string;
  titreFormation: string;
  formationId: number;
  valide: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CertificatService {
  private apiUrl = `${environment.apiUrl}/certificats`;

  constructor(private http: HttpClient) {}

  // Récupérer les certificats de l'utilisateur connecté
  getMesCertificats(userId: string): Observable<CertificatResponse[]> {
    const params = new HttpParams().set('userId', userId);
    return this.http.get<CertificatResponse[]>(
      `${this.apiUrl}/mes-certificats`,
      { params }
    );
  }

  // Vérifier un certificat par son numéro (public)
  verifierCertificat(numCertificat: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/verifier/${numCertificat}`);
  }

  // Optionnel : Générer manuellement si besoin
  genererCertificat(
    userId: string,
    formationId: number
  ): Observable<CertificatResponse> {
    const params = new HttpParams()
      .set('userId', userId)
      .set('formationId', formationId.toString());
    return this.http.post<CertificatResponse>(this.apiUrl, {}, { params });
  }
}
