import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/models/movie.model';
import { MovieItemComponent } from './movie-item/movie-item.component';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [MovieItemComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent {
  @Input({required: true}) movies: Movie[] = [];
}
