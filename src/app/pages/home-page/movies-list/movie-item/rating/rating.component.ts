import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent implements OnInit {
  @Input({required: true}) rating = 0;
  @Input() width = 45;
  @Input() height = 45;
  ratingPercentage = '';
  color = '';

  /**
   * Angular OnInit Lifecycle
   * 
   */
  ngOnInit(): void {
    this.rating = Math.floor(this.rating);
    this.ratingPercentage = `${this.rating}%`;

    if (this.rating > 0) {
      this.color = '#ff8000';
    }

    if (this.rating > 50) {
      this.color = '#40ff00';
    }
  }
}
