import { Component, Input } from '@angular/core';
import { MovieSearchResult } from '../../../../shared/models/movie.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss'
})
export class SearchResultComponent {
  @Input() searchResults: MovieSearchResult[] = [];
}
