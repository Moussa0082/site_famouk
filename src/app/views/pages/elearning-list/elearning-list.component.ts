import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElearningDetailComponent } from '../elearning-detail/elearning-detail.component';

@Component({
  selector: 'app-elearning-list',
  standalone: true,
  imports: [CommonModule, ElearningDetailComponent],
  templateUrl: './elearning-list.component.html',
  styleUrls: ['./elearning-list.component.scss']
})
export class ElearningListComponent {
  @Input() searchTerm = '';

  modules = [
    { id:1, title:'Culture numérique et citoyennetés', description:'Utiliser le numérique pour s’engager.', image:'assets/img/formation/1.jpeg', category:'Citoyenneté', pdf:'assets/docs/citoyennete.pdf', video:'' },
    { id:2, title:'Fake News & Désinformation', description:'Repérer les infox et vérifier les sources.', image:'assets/img/formation/2.jpeg', category:'Éducation aux médias', pdf:'assets/docs/fakenews.pdf', video:'' },
    { id:3, title:'Initiation à la cybersécurité', description:'Protéger ses comptes et ses données.', image:'assets/img/formation/3.jpeg', category:'Sécurité', pdf:'', video:'https://www.youtube.com/watch?v=efgh5678' }
  ];

  selected: any = null;

  get filteredModules(){
    const s = (this.searchTerm||'').toLowerCase();
    return this.modules.filter(m => !s || (m.title + ' ' + m.description + ' ' + m.category).toLowerCase().includes(s));
  }

  openDetail(m:any){ this.selected = m; }
  closeDetail(){ this.selected = null; }
}
