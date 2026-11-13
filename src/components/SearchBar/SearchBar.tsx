import { useState } from 'react';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => Promise<void>;
}

function SearchBar({ onSubmit }: SearchBarProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(form: FormData) {
    const query = String(form.get('query') ?? '').trim();

    if (!query) {
      toast('Please enter your search query.');
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(query);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <header className={css.header}>
      <div className={css.container}>
        <a
          className={css.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form className={css.form} action={handleSubmit}>
          <input
            className={css.input}
            type="text"
            name="query"
            aria-label="Movie title"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={css.button} type="submit" disabled={isSubmitting}>
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default SearchBar;
