import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../../../../service/blog.service';
import { BlogResponse } from '../../../../../models/Blog';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-blog-sidebar',
  imports: [RouterLink, CommonModule],
  templateUrl: './blog-sidebar.component.html',
  styles: ``,
})
export class BlogSidebarComponent {
  private blogService = inject(BlogService);

  blogs: BlogResponse[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';
  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs(): void {
    this.isLoading = true;
    this.blogService.getActiveBlogs().subscribe({
      next: (data: BlogResponse[]) => {
        this.blogs = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des blogs', err);
        this.errorMessage = 'Impossible de charger les articles.';
        this.isLoading = false;
      },
    });
  }

  getBlogImage(blog: BlogResponse): string {
    // 1. Vérifier si le blog possède des médias
    if (blog.media && blog.media.length > 0) {
      const firstMedia = blog.media[0];

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
