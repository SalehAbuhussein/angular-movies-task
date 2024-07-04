import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './search-result/search-result.component';
import { ClickOutsideDirective } from '../../../shared/directives/click-outside.directive';

@Component({
  selector: 'app-movies-search-input',
  standalone: true,
  imports: [FormsModule, SearchResultComponent, ClickOutsideDirective],
  templateUrl: './movies-search-input.component.html',
  styleUrl: './movies-search-input.component.scss'
})
export class MoviesSearchInputComponent {
  @Input() inputValue = '';

  onInputChange(event: Event) {
    console.log((<HTMLInputElement> event.target).value);
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
}
