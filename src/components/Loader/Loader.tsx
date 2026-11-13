import css from './Loader.module.css';

function Loader() {
  return (
    <p className={css.text} role="status">
      Loading movies, please wait...
    </p>
  );
}

export default Loader;
