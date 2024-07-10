import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { Movie, MovieSearchResult, MovieSearchResultResponse, MoviesResponse } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private _http = inject(HttpClient);
  private _baseUrl = `https://api.themoviedb.org/3`;
  imgUrl = 'https://image.tmdb.org/t/p/original';

  constructor() { }

  /**
   * Get a single movie data
   * 
   * @param id Movie ID
   * @returns {Observable<Movie[]>}
   */
  getMovie(id: number): Observable<Movie[]> {
    return this._http.get<Movie>(`${this._baseUrl}/movie/${id}`).pipe(
      map(movie => [movie]),
      catchError(err => of([])),
    );
  }

  /**
   * Get popular movies list
   * 
   * @returns { Observable<Movie[]> }
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
   * @returns { Observable<Movie[]> }
   */
  getTopRatedMovies(): Observable<Movie[]> {
    return this._http.get<MoviesResponse>(`${this._baseUrl}/movie/top_rated`).pipe(
      map(movieResponse => movieResponse.results),
      catchError(err => of([]))
    );
  }

    /**
   * Get movies names that is similar or match the query
   * 
   * @returns { Observable<MovieSearchResult[]> }
   */
  getMoviesByKeyword(query: string): Observable<MovieSearchResult[]> {
    const params = new HttpParams().set('query', query);

    return this._http.get<MovieSearchResultResponse>(`${this._baseUrl}/search/keyword`, { params }).pipe(
      map(movieResponse => movieResponse.results),
      catchError(err => of([]))
    );
  }

  /**
   * Get Movie Details
   * 
   * @param movieId Movie ID
   * 
   * @returns { Observable<Movie | null> }
   */
  getMovieDetails(movieId: number): Observable<Movie | null> {
    return this._http.get<Movie>(`${this._baseUrl}/movie/${movieId}`).pipe(
      catchError(err => of(null))
    );
  }
}
