import { Component, inject, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AboutComponent } from './components/about/about.component';
import { CauseComponent } from './components/cause/cause.component';
import { EventComponent } from './components/event/event.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { TeamAreaComponent } from './components/team-area/team-area.component';
import { BlogAreaComponent } from './components/blog-area/blog-area.component';
import { CommonModule } from '@angular/common';
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { RouterLink } from '@angular/router';
import { HeadImageService } from '../../service/head-image.service';
import { HeadImage } from '../../models/HeadImage';
import { catchError, forkJoin, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-index',
  imports: [
    SlickCarouselModule,
    ScrollToModule,
    CommonModule,
    AboutComponent,
    CauseComponent,
    EventComponent,
    TestimonialComponent,
    GallaryComponent,
    TeamAreaComponent,
    BlogAreaComponent,
    RouterLink,
  ],
  templateUrl: './index.component.html',
  styles: ``,
  providers: [ScrollToService],
})
export class IndexComponent implements OnInit {
  sliderConfig = {
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
    arrows: true,
    dots: false,
    prevArrow: '.prev-arow',
    nextArrow: '.next-arow',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  private headService = inject(HeadImageService);

  // headImages: HeadImage[] = [];

  // pagesToManage = ['Home', 'Blog', 'Formation', 'Event', 'Logo'];

  // loadAllHeadImages() {
  //   const requests = this.pagesToManage.map((page) =>
  //     this.headService.getHeadImageByPage(page).pipe(
  //       map((response) =>
  //         response && response.headImage ? response.headImage : null
  //       ),
  //       catchError(() => of(null))
  //     )
  //   );

  //   forkJoin(requests).subscribe({
  //     next: (results) => {
  //       this.headImages = results.filter((img) => img !== null);
  //       console.log('Images chargées :', this.headImages);
  //     },
  //   });
  // }

  ngOnInit() {
    // throw new Error('Method not implemented.');
    this.loadLogo();
  }

  logoData: HeadImage | null = null;

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
        console.log('image chargé avec succès :', this.logoData);
      });
  }
}
