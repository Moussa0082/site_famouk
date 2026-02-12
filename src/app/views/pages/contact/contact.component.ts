import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../component/breadcrumb/breadcrumb.component';
import { ContactService } from '../../../service/contact.service';
import { Contact } from '../../../models/Contact';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HeadImageService } from '../../../service/head-image.service';
import { HeadImage } from '../../../models/HeadImage';
import { catchError, map, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [BreadcrumbComponent, FormsModule],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
    this.loadImage();
  }
  private contactService = inject(ContactService);
  private toastr = inject(ToastrService);
  private headService = inject(HeadImageService);

  logoData: HeadImage | null = null;
  isSending: boolean = false;

  // Initialisation de l'objet contact
  contact: Contact = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  onSubmit() {
    // Vérification basique avant envoi
    if (!this.contact.email || !this.contact.message) {
      this.toastr.warning('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    this.isSending = true;

    this.contactService.bookContact(this.contact).subscribe({
      next: (response) => {
        if (response) {
          this.toastr.success('Votre message a été envoyé avec succès !');
          this.resetForm();
          // // Optionnel : rediriger vers l'accueil après 2 secondes
          // setTimeout(() => this.router.navigate(['/home']), 2000);
        } else {
          this.toastr.error("Une erreur est survenue lors de l'envoi.");
        }
        this.isSending = false;
      },
      error: (err) => {
        console.error(err);
        this.toastr.error('Impossible de contacter le serveur.');
        this.isSending = false;
      },
    });
  }

  resetForm() {
    this.contact = { firstName: '', lastName: '', email: '', message: '' };
  }

  loadImage() {
    const pageName = 'Blog';

    this.headService
      .getHeadImageByPage(pageName)
      .pipe(
        map((response) => {
          // On extrait l'objet 'headImage' de la réponse JSON
          if (response && response.headImage) {
            const item = response.headImage;

            // Reconstruction de l'URL avec ton environnement
            if (item.image && !item.image.startsWith('http')) {
              item.image = `${environment.apiUrl}/${item.image}`;
            }
            return item;
          }
          return null;
        }),
        catchError((err) => {
          console.error(`Erreur lors de la récupération du logo:`, err);
          return of(null);
        })
      )
      .subscribe((data) => {
        this.logoData = data;
        console.log('image chargé avec succès :', this.logoData);
      });
  }
}
