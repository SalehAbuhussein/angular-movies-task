import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movies-section',
  standalone: true,
  imports: [],
  templateUrl: './movies-section.component.html',
  styleUrl: './movies-section.component.scss'
})
export class MoviesSectionComponent {
  @Input({required: true}) rating = 0;
  @Input({required: true}) img = '';
  @Input({required: true}) title = '';
  @Input({required: true}) date = '';

}
