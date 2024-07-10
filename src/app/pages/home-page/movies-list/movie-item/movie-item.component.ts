import { Component, inject, Input, OnInit } from '@angular/core';
import { RatingComponent } from './rating/rating.component';
import { Movie } from '../../../../shared/models/movie.model';
import { MoviesService } from '../../../../shared/services/movies.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [RatingComponent, RouterLink],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss'
})
export class MovieItemComponent {
    @Input({required: true}) movie!: Movie;

    moviesService = inject(MoviesService);
}
