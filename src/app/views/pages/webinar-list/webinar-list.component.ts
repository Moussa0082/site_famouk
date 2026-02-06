import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebinarDetailComponent } from '../webinar-detail/webinar-detail.component';

@Component({
  selector: 'app-webinar-list',
  standalone: true,
  imports: [CommonModule, WebinarDetailComponent],
  templateUrl: './webinar-list.component.html',
  styleUrls: ['./webinar-list.component.scss']
})
export class WebinarListComponent {
  @Input() searchTerm = '';

  webinaires = [
    { id:1, title:'Citoyenneté et Réseaux Sociaux', description:'Exprimer en ligne de façon responsable.', date: new Date('2025-10-20'), presenter:'Aïssata Koné' },
    { id:2, title:'Jeunes & Innovation Tech', description:'Rencontre avec jeunes innovateurs', date: new Date('2025-11-05'), presenter:'Souleymane Diarra' }
  ];

  selected: any = null;

  get filtered(){ const s=(this.searchTerm||'').toLowerCase(); return this.webinaires.filter(w=>!s|| (w.title+' '+w.presenter+' '+w.description).toLowerCase().includes(s)); }

  open(w:any){ this.selected = w; }
  close(){ this.selected = null; }
}
