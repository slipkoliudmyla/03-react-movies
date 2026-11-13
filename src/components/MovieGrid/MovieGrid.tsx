import css from './MovieGrid.module.css';
import type { Movie } from '../../types/movie';

interface MovieGridProps {
  onSelect: (movie: Movie) => void;
  movies: Movie[];
}

function MovieGrid({ onSelect, movies }: MovieGridProps) {
  return (
    <ul className={css.grid} aria-label="Search results">
      {movies.map((movie) => (
        <li key={movie.id}>
          <button
            className={css.card}
            type="button"
            onClick={() => onSelect(movie)}
          >
            {movie.poster_path ? (
              <img
                className={css.image}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
                loading="lazy"
              />
            ) : (
              <span className={css.placeholder}>No poster available</span>
            )}
            <span className={css.title}>{movie.title}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default MovieGrid;
