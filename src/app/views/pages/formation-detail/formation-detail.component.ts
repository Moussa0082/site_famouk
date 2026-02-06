// formation-detail.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.scss']
})
export class FormationDetailComponent {
  id!: number;
  formation: any;

  modules = [
    { id: 1, title: 'Introduction au numérique', content: '<h3>Les bases du numérique</h3><p>Texte mis en forme par l’admin.</p>' },
    { id: 2, title: 'Sécurité en ligne', content: '<h3>Protéger ses données</h3><p>Texte illustré par vidéos, PDF...</p>' }
  ];

  constructor(private route: ActivatedRoute) {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.formation = this.modules.find(m => m.id === this.id);
  }
}
