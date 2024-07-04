import { Component, Input } from '@angular/core';
import { RatingComponent } from './rating/rating.component';
import { Movie } from '../../../../shared/models/movie.model';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss'
})
export class MovieItemComponent {
    @Input({required: true}) movie!: Movie;
}
