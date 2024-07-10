import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './search-result/search-result.component';
import { ClickOutsideDirective } from '../../../shared/directives/click-outside.directive';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { MovieSearchResult } from '../../../shared/models/movie.model';
import { MoviesService } from '../../../shared/services/movies.service';

@Component({
  selector: 'app-movies-search-input',
  standalone: true,
  imports: [FormsModule, SearchResultComponent, ClickOutsideDirective],
  templateUrl: './movies-search-input.component.html',
  styleUrl: './movies-search-input.component.scss'
})
export class MoviesSearchInputComponent implements OnInit, OnDestroy {
  @Input() inputValue = '';
  destroy$ = new Subject<void>;
  searchText$ = new Subject<string>;
  searchResults: MovieSearchResult[] = [];

  moviesService = inject(MoviesService);

  /**
   * Angular onInit lifecycle method
   * 
   */
  ngOnInit(): void {
    this.initalizeComponent();
  }

  /**
   * Initialize necessary logic for component to work
   * 
   */
  initalizeComponent() {
    this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(searchText => this.moviesService.getMoviesByKeyword(searchText))
    ).subscribe(value => {
      console.log(value);
      this.searchResults = value;
    })
  }

  /**
   * Listen to input change event and
   * emit the value that comes from input
   * 
   * @param {Event} event 
   */
  onInputChange(event: Event) {
    this.searchText$.next((<HTMLInputElement> event.target).value);
  }

  /**
   * Clear input on Close button click
   * 
   */
  onInputClear() {
    this.inputValue = '';
  }

  /**
   * Clear input on clicking outside the component
   * 
   */
  onOutsideComponentClick() {
    this.onInputClear();
  }

  /**
   * onDestory angular lifecycle
   * 
   */
  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
