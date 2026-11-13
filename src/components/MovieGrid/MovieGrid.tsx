import type { KeyboardEvent } from 'react';
import type { Movie } from '../../types/movie';
import css from './MovieGrid.module.css';

interface MovieGridProps {
  onSelect: (movie: Movie) => void;
  movies: Movie[];
}

function MovieGrid({ onSelect, movies }: MovieGridProps) {
  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>, movie: Movie) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(movie);
    }
  }

  return (
    <ul className={css.grid} aria-label="Search results">
      {movies.map((movie) => (
        <li key={movie.id}>
          <div
            className={css.card}
            role="button"
            tabIndex={0}
            aria-label={movie.title}
            onClick={() => onSelect(movie)}
            onKeyDown={(event) => handleKeyDown(event, movie)}
          >
            {movie.poster_path ? (
              <img
                className={css.image}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                loading="lazy"
              />
            ) : (
              <p className={css.image}>No poster available</p>
            )}
            <h2 className={css.title}>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MovieGrid;
