import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Movie, MoviesResponse } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private _http = inject(HttpClient);
  private _baseUrl = `https://api.themoviedb.org/3`;

  constructor() { }

  /**
   * Get a single movie data
   * 
   * @param id Movie ID
   * @returns {Observable<Movie[]>}
   */
  getMovie(id: number): Observable<Movie[]> {
    return this._http.get<Movie[]>(`${this._baseUrl}/movie/${id}`).pipe(
      map(movie => [...movie]),
      catchError(err => of([])),
    );
  }

  /**
   * Get popular movies list
   * 
   * @returns 
   */
  getPopularMovies(): Observable<Movie[]> {
    return this._http.get<MoviesResponse>(`${this._baseUrl}/movie/popular`).pipe(
      map(movieResponse => movieResponse.results),
      catchError(err => of([])),
    );
  }

  /**
   * Get top movies list
   * 
   * @returns 
   */
  getTopRatedMovies(): Observable<Movie[]> {
    return this._http.get<MoviesResponse>(`${this._baseUrl}/movie/top_rated`).pipe(
      map(movieResponse => movieResponse.results),
      catchError(err => of([]))
    );
  }
}
