import css from './ErrorMessage.module.css';

function ErrorMessage() {
  return (
    <p className={css.text} role="alert">
      {import.meta.env.VITE_TMDB_TOKEN
        ? 'Could not load movies. Please try again.'
        : 'Movie search needs a TMDB API Read Access Token.'}
    </p>
  );
}

export default ErrorMessage;
