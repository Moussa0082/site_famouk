import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { menuItems } from './data';
import { RouterLink } from '@angular/router';
import { HeadImageService } from '../../service/head-image.service';
import { HeadImage } from '../../models/HeadImage';
import { catchError, forkJoin, map, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';

interface MenuItem {
  title: string;
  link: string;
  subMenu?: MenuItem[];
  isOpen?: boolean;
}
@Component({
  selector: 'app-mobile-sidebar',
  imports: [CommonModule, RouterLink],
  templateUrl: './mobile-sidebar.component.html',
  styles: ``,
})
export class MobileSidebarComponent implements OnInit {
  private headService = inject(HeadImageService);
  private toastr = inject(ToastrService);

  logoData: HeadImage | null = null;
  form = { id: '', pageName: '', description: '' };
  selectedFile: File | null = null;
  fileName = '';
  isEdit = false;

  @Input() isMenuOpen = false;
  @Output() closeMenuEvent = new EventEmitter<void>();
  menuItems: MenuItem[] = [];

  // constructor(private http: HttpClient) {}

  ngOnInit() {
    this.menuItems = menuItems;
    this.loadLogo();
  }

  closeSidebar() {
    this.closeMenuEvent.emit();
  }
  toggleSubMenu(item: MenuItem, event?: Event): void {
    if (event) {
      event.stopPropagation(); // Prevents click from propagating to the parent <a>
    }

    if (item.subMenu) {
      item.isOpen = !item.isOpen;
    }
  }

  loadLogo() {
    const pageName = 'Home';

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
        console.log('Logo chargé avec succès :', this.logoData);
      });
  }
}
