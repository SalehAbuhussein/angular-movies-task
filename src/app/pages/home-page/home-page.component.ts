import { Component } from '@angular/core';
import { MoviesSectionComponent } from './movies-section/movies-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MoviesSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
