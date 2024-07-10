import { Component, Inject, inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MoviesService } from '../../shared/services/movies.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { Movie } from '../../shared/models/movie.model';
import { DOCUMENT } from '@angular/common';
import { RatingComponent } from "../home-page/movies-list/movie-item/rating/rating.component";

@Component({
  selector: 'app-movie-detail-page',
  standalone: true,
  imports: [RatingComponent, RouterLink],
  templateUrl: './movie-detail-page.component.html',
  styleUrl: './movie-detail-page.component.scss'
})
export class MovieDetailPageComponent implements OnInit, OnDestroy {
  movie!: Movie;
  destroy$ = new Subject<void>;
  
  constructor(public movieService: MoviesService, public router: Router, public activatedRoute: ActivatedRoute, public renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  /**
   * Angular OnInit lifecycle method
   * 
   */
  ngOnInit(): void {
    this.initializeComponent();
  }

  /**
   * Initialize component in angular onInit lifecycle method
   * 
   */
  initializeComponent() {
    const movieId = +this.activatedRoute.snapshot.params['movie_id'];
    this.movieService.getMovieDetails(movieId).subscribe(value => {
      if (value == null) {
        this.router.navigate(['']);
      } else { 
        this.movie = value;
        this.addBackdropImage(this.movie.backdrop_path);
      }
    })
  }

  /**
   * Add background Image from api response
   * 
   * @param { string } backdropPath 
   */
  addBackdropImage(backdropPath: string) {
    this.renderer.setStyle(this.document.body, 'background-image', `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${this.movieService.imgUrl}/${backdropPath}')`);
  }

  /**
   * Remove background Image from body tag
   * 
   */
  removeBackdropImage() {
    this.renderer.removeStyle(this.document.body, 'background-image');
  }

  /**
   * Angular onDestory lifecycle method
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.removeBackdropImage()
  }
}
