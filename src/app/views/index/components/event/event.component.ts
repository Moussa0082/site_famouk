import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from '../../../../service/event.service';
import { EventResponse } from '../../../../models/Event';
import { environment } from '../../../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event',
  imports: [NgbNavModule, RouterLink, CommonModule],
  templateUrl: './event.component.html',
  styles: ``,
})
export class EventComponent implements OnInit {
  hoverIndex: number | null = null;

  private eventService = inject(EventService);

  events: EventResponse[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  ngOnInit(): void {
    this.loadEvent();
  }

  activeId: string | null = null;

  loadEvent(): void {
    this.isLoading = true;
    this.eventService.getActiveEvents().subscribe({
      next: (data: EventResponse[]) => {
        this.events = data;
        if (this.events.length > 0) {
          this.activeId = this.events[0].id;
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des blogs', err);
        this.errorMessage = 'Impossible de charger les articles.';
        this.isLoading = false;
      },
    });
  }

  getEventImage(event: EventResponse): string {
    // 1. Vérifier si le blog possède des médias
    if (event.media && event.media.length > 0) {
      const firstMedia = event.media[0];

      // 2. Vérifier si webPath existe (généré par ton @Transient Java)
      if (firstMedia.webPath) {
        // On retourne l'URL complète vers ton backend
        // Rappel : Ton MvcConfig Spring mappe "/images/**" vers ton dossier Desktop
        return `${environment.apiUrl}${firstMedia.webPath}`;
      }
    }
    // 3. Image de secours (Placeholder) si pas de média ou erreur
    return 'assets/img/theme/img-1-1000x600.jpg';
  }
}
