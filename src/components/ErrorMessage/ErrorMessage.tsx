import css from './ErrorMessage.module.css';

function ErrorMessage() {
  return (
    <p className={css.text} role="alert">
      Could not load movies. Please try again.
    </p>
  );
}

export default ErrorMessage;
