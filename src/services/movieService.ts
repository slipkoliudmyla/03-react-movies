import axios from 'axios';
import type { Movie } from '../types/movie';

interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const TMDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export async function fetchMovies(query: string): Promise<Movie[]> {
  if (!import.meta.env.VITE_TMDB_TOKEN) {
    throw new Error('Missing TMDB API Read Access Token');
  }

  const { data } = await TMDB.get<FetchMoviesResponse>('/search/movie', {
    params: { query },
  });
  return data.results;
}
