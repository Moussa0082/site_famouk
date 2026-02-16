import { Component } from '@angular/core';
import {
  CertificatResponse,
  CertificatService,
} from '../../../service/certificat.service';
import { AuthService } from '../../../service/auth.service';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { UserResponseDTO } from '../../../models/User';
import { UtilisateurService } from '../../../service/utilisateur.service';

@Component({
  selector: 'app-mes-certificats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mes-certificats.component.html',
  styleUrl: './mes-certificats.component.scss',
})
export class MesCertificatsComponent {
  certificats: CertificatResponse[] = [];
  isLoading = true;
  selectedCert: any;
  utilisateur?: UserResponseDTO | null;

  constructor(
    private certificatService: CertificatService,
    private authService: AuthService,
    private utilisateurService: UtilisateurService
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();
    if (userId) {
      this.utilisateurService.getApprenant(userId).subscribe({
        next: (user) => {
          this.utilisateur = user;
          console.log('Infos utilisateur chargées pour le certificat', user);
        },
        error: (err) => console.error('Erreur chargement utilisateur', err),
      });
      this.certificatService.getMesCertificats(userId).subscribe({
        next: (data) => {
          this.certificats = data;
          this.isLoading = false;
        },
        error: () => (this.isLoading = false),
      });
    }
  }

  async downloadCertificat(cert: CertificatResponse) {
    if (!this.utilisateur) {
      alert('Données utilisateur en cours de chargement, réessayez...');
      return;
    }

    this.selectedCert = cert;

    // On attend un petit peu que le DOM se mette à jour avec selectedCert
    setTimeout(async () => {
      const data = document.getElementById('pdfContent');
      if (!data) return;

      const canvas = await html2canvas(data, {
        scale: 2, // Haute résolution
        useCORS: true,
        logging: false,
      });

      const imgWidth = 297; // Format A4 Paysage en mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'mm', 'a4'); // 'l' pour landscape (paysage)

      pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`Certificat_${cert.numCertificat}.pdf`);
    }, 100);
  }
}
