import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { Movie } from '../../types/movie';
import css from './MovieModal.module.css';

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

function MovieModal({ movie, onClose }: MovieModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;

    dialog?.showModal();
    document.body.style.overflow = 'hidden';

    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return createPortal(
    <dialog
      ref={dialogRef}
      className={css.modal}
      aria-labelledby="movie-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article>
        <button
          type="button"
          className={css.closeButton}
          aria-label="Close details"
          onClick={onClose}
        >
          &times;
        </button>
        {movie.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
            alt=""
            className={css.image}
          />
        )}
        <div className={css.content}>
          <h2 id="movie-title">{movie.title}</h2>
          <p>{movie.overview || 'No overview available.'}</p>
          <p>
            <strong>Release date</strong> {movie.release_date || 'Unknown'}
          </p>
          <p>
            <strong>Rating</strong> {movie.vote_average.toFixed(1)} / 10
          </p>
        </div>
      </article>
    </dialog>,
    document.body,
  );
}

export default MovieModal;
