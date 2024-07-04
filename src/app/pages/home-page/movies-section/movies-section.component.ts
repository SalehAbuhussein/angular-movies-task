import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/models/movie.model';
import { MovieItemComponent } from '../movies-list/movie-item/movie-item.component';

@Component({
  selector: 'app-movies-section',
  standalone: true,
  imports: [MovieItemComponent],
  templateUrl: './movies-section.component.html',
  styleUrl: './movies-section.component.scss'
})
export class MoviesSectionComponent {
  @Input({required: true}) movie!: Movie[];
  @Input({required: true}) title!: string;
  @Input({required: true}) titleIcon!: string;
}
