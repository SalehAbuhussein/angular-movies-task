export interface Movie {
  id: number,
  title: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  vote_average: number,
  vote_count: number
}

export interface MoviesResponse {
  page: number,
  results: Movie[],
  total_pages: number,
  total_results: number
}