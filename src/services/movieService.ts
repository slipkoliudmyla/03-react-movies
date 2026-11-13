import axios from 'axios';
import type { Movie } from '../types/movie';

interface FetchMoviesResponse {
  results: Movie[];
}

export async function fetchMovies(query: string): Promise<Movie[]> {
  const { data } = await axios.get<FetchMoviesResponse>('/api/movies', {
    params: { query },
  });
  return data.results;
}
