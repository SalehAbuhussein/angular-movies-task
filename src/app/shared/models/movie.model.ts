export interface Movie {
  id: number,
  title: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  vote_average: number,
  vote_count: number,
  backdrop_path: string,
  genre_ids?: number[],
  genres?: {
    id: number,
    name: string
  }[];
}

export interface MoviesResponse {
  page: number,
  results: Movie[],
  total_pages: number,
  total_results: number
}

export interface MovieSearchResult {
  id: number,
  name: string
}

export interface MovieSearchResultResponse {
  page: number,
  results: MovieSearchResult[],
  total_pages: number,
  total_results: number
}