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
  movies: Movie[] = [];
  
  moviesService = inject(MoviesService);

  /**
   * Angular OnInit lifecycle
   * 
   */
  ngOnInit(): void {
    this.moviesService.getMovie(400).subscribe(movie => {
      console.log(movie);
      
      this.movies = movie
    })
  }
}
