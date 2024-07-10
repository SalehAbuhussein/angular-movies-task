import { AfterViewInit, Component, Inject, inject, OnInit, Renderer2 } from '@angular/core';
import { MoviesSectionComponent } from './movies-section/movies-section.component';
import { MoviesService } from '../../shared/services/movies.service';
import { Movie } from '../../shared/models/movie.model';
import { HeaderComponent } from '../../shared/layout/header/header.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MoviesSectionComponent, HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit, AfterViewInit {
  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  
  constructor(@Inject(DOCUMENT) private document: Document, public moviesService: MoviesService, public renderer: Renderer2) {}

  /**
   * Angular OnInit lifecycle
   * 
   */
  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe(movies => {
      this.popularMovies = movies
    });

    this.moviesService.getTopRatedMovies().subscribe(movies => {
      this.topRatedMovies = movies;
    })
  }

    /**
   * Angular afterViewInit lifecycle
   * 
   */
  ngAfterViewInit(): void {
    this.renderer.setStyle(this.document.body, 'background-image', `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/images/movie-bg.png')`);
  }

}
