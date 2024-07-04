import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/models/movie.model';
import { MoviesListComponent } from '../movies-list/movies-list.component';

@Component({
  selector: 'app-movies-section',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './movies-section.component.html',
  styleUrl: './movies-section.component.scss'
})
export class MoviesSectionComponent {
  @Input({required: true}) movies!: Movie[];
  @Input({required: true}) title!: string;
  @Input({required: true}) titleIcon!: 'star.svg' | 'fire.svg';
}
