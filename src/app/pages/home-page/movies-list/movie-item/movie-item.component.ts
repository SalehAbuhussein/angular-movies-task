import { Component } from '@angular/core';
import { RatingComponent } from './rating/rating.component';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss'
})
export class MovieItemComponent {
  
}
