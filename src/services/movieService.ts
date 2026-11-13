import axios from 'axios';
import type { Movie } from '../types/movie';

interface FetchMoviesResponse {
  results: Movie[];
}

export async function fetchMovies(query: string): Promise<Movie[]> {
  const token = import.meta.env.VITE_TMDB_TOKEN;
  const response = token
    ? await axios.get<FetchMoviesResponse>(
        'https://api.themoviedb.org/3/search/movie',
        {
          params: { query },
          headers: { Authorization: `Bearer ${token}` },
        },
      )
    : await axios.get<FetchMoviesResponse>('/api/movies', {
        params: { query },
      });
  return response.data.results;
}
