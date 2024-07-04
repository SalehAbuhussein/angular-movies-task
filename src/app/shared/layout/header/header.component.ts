import { Component } from '@angular/core';
import { MoviesSearchInputComponent } from '../../../pages/home-page/movies-search-input/movies-search-input.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MoviesSearchInputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
