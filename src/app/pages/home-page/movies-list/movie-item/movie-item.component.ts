import { Component, inject, Input, OnInit } from '@angular/core';
import { RatingComponent } from './rating/rating.component';
import { Movie } from '../../../../shared/models/movie.model';
import { MoviesService } from '../../../../shared/services/movies.service';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss'
})
export class MovieItemComponent implements OnInit {
    @Input({required: true}) movie!: Movie;

    moviesService = inject(MoviesService);

    ngOnInit(): void {
      console.log('this.movie');
      console.log(this.movie);
      
    }
}
