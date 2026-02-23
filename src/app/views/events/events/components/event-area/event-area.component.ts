import { Component, inject } from '@angular/core';
import { eventArea } from '../../../data';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../../../service/event.service';
import { EventResponse } from '../../../../../models/Event';
import { environment } from '../../../../../../environments/environment';
import { HeadImageService } from '../../../../../service/head-image.service';
import { HeadImage } from '../../../../../models/HeadImage';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-event-area',
  imports: [RouterLink, CommonModule],
  templateUrl: './event-area.component.html',
  styleUrl: './event-area.component.scss',
})
export class EventAreaComponent {
  // eventAreaData = eventArea;
  hoverIndex: number | null = null;

  private eventService = inject(EventService);

  events: EventResponse[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  ngOnInit(): void {
    this.loadEvent();
  }

  loadEvent(): void {
    this.isLoading = true;
    this.eventService.getActiveEvents().subscribe({
      next: (data: EventResponse[]) => {
        this.events = data;
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
