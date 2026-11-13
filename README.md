# Movie Search

Пошук фільмів за назвою через TMDB. Натисни на картку, щоб відкрити опис,
дату виходу й рейтинг. Вікно закривається кнопкою, клавішею Escape або
натисканням на затемнену область.

## Запуск

Потрібні Node.js 24+, npm і [TMDB API Read Access Token](https://www.themoviedb.org/settings/api).

1. Скопіюй `.env.example` у `.env` і заповни `VITE_TMDB_TOKEN`.
2. Запусти `npm ci` і `npm run dev`.

Для перевірки запусти `npm run lint` і `npm run build`. Для деплою задай
`VITE_TMDB_TOKEN` у середовищі збірки.

Адаптовано з [03-react-movies Софії Дорош](https://github.com/sofiiadorosh/03-react-movies).
