import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
  isLoading: boolean;
}

function SearchBar({ onSubmit, isLoading }: SearchBarProps) {
  function handleSubmit(form: FormData) {
    const query = String(form.get('query') ?? '').trim();

    if (!query) {
      toast('Enter a movie title to search.');
      return;
    }

    onSubmit(query);
  }

  return (
    <header className={css.header}>
      <div className={css.container}>
        <div>
          <h1 className={css.title}>Movie Search</h1>
          <a
            className={css.link}
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by TMDB
          </a>
        </div>
        <form className={css.form} action={handleSubmit}>
          <input
            className={css.input}
            type="search"
            name="query"
            aria-label="Movie title"
            autoComplete="off"
            placeholder="Search by title"
            disabled={isLoading}
          />
          <button className={css.button} type="submit" disabled={isLoading}>
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default SearchBar;
