import { Component, inject, OnInit } from '@angular/core';
import { MoviesSectionComponent } from './movies-section/movies-section.component';
import { MoviesService } from '../../shared/services/movies.service';
import { Movie } from '../../shared/models/movie.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MoviesSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  
  moviesService = inject(MoviesService);

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
}
