import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../component/breadcrumb/breadcrumb.component';
import { BlogContentComponent } from '../../blogs/blog/components/blog-content/blog-content.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterResourcesPipe } from "./pipe/filterResources";



@Component({
  selector: 'app-ressource',
  imports: [BreadcrumbComponent, BlogContentComponent, CommonModule, FormsModule, FilterResourcesPipe],
  templateUrl: './ressource.component.html',
  styleUrl: './ressource.component.scss'
})
export class RessourceComponent {

  
//   resources: any[] = [
//   {
//     id: 1,
//     image: 'assets/img/resources/r1.jpeg',
//     title: 'Guide du Développeur Web Moderne',
//     description: 'Un guide complet pour maîtriser HTML, CSS, JavaScript et Angular.',
//     author: 'Équipe Logo',
//     date: '05 octobre 2025',
//     link: '#',
//   },
//   {
//     id: 2,
//     image: 'assets/img/resources/r3.png',
//     title: 'Introduction à la Cybersécurité',
//     description: 'Apprenez les bases pour protéger vos données et votre identité numérique.',
//     author: 'Équipe Logo',
//     date: '05 octobre 2025',
//     link: '#',
//   },
//   {
//     id: 3,
//     image: 'assets/img/resources/r4.jpeg',
//     title: 'Comprendre l’Intelligence Artificielle',
//     description: 'Un dossier complet pour comprendre les enjeux et les applications de l’IA.',
//     author: 'Équipe Logo',
//     date: '05 octobre 2025',
//     link: '#',
//   },
//   {
//     id: 4,
//     image: 'assets/img/resources/r5.jpeg',
//     title: 'Formation Data & Analyse',
//     description: 'Les outils essentiels pour manipuler, visualiser et interpréter les données.',
//     author: 'Équipe Logo',
//     date: '05 octobre 2025',
//     link: '#',
//   },
//   {
//     id: 5,
//     image: 'assets/img/resources/r2.png',
//     title: 'Guide UX/UI Design',
//     description: 'Découvre les bonnes pratiques pour concevoir des interfaces modernes et intuitives.',
//     author: 'Équipe Logo',
//     date: '05 octobre 2025',
//     link: '#',
//   },
//   {
//     id: 6,
//     image: 'assets/img/resources/r6.jpg',
//     title: 'Tutoriel Vidéo : Angular pour débutants',
//     description: 'Une série de vidéos pour apprendre à créer votre première application Angular.',
//     author: 'Équipe Logo',
//     date: '05 octobre 2025',
//     link: '#',
//   },
// ];

searchTerm: string = '';
selectedTheme: string = '';

resources = [
  { title: 'Article sur la citoyenneté', type: 'Article', theme: 'citoyenneté', author: 'Moussa', date: '2025-10-01', description: 'Lorem ipsum...', image: 'assets/img/resources/r2.png', link: '#' },
  { title: 'Podcast cybersécurité', type: 'Podcast', theme: 'cybersécurité', author: 'Amina', date: '2025-09-28', description: 'Lorem ipsum...', image: 'assets/img/resources/r2.png', link: '#' },
  { title: 'Infographie désinformation', type: 'Infographie', theme: 'désinformation', author: 'Kader', date: '2025-09-20', description: 'Lorem ipsum...', image: 'assets/img/resources/r2.png', link: '#' },
];

}

