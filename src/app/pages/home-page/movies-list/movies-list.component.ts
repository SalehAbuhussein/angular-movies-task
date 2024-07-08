import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Movie } from '../../../shared/models/movie.model';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { SwiperOptions, Swiper } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [MovieItemComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MoviesListComponent implements AfterViewInit {
  @Input({required: true}) movies: Movie[] = [];
  @Input({required: true}) nextClass = '';
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  ngAfterViewInit(): void {
    const swiperConfig: SwiperOptions = {
      slidesPerView: 4,
      spaceBetween: 20,
      pagination: false,
      navigation: {
        nextEl: `.${this.nextClass}`
      },
    }
    
    Object.assign(this.swiper.nativeElement, swiperConfig);
    
    this.swiper.nativeElement.initialize();
  }

}