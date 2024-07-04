import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layout/header/header.component';
import { MoviesService } from './shared/services/movies.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-movies-task';

  moviesService = inject(MoviesService);

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe(value => {
      console.log(value);
      
    });
  }
}
