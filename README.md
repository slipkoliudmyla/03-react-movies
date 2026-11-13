# Movie Search

Пошук фільмів за назвою через TMDB. Натисни на картку, щоб відкрити опис,
дату виходу й рейтинг. Вікно закривається кнопкою, клавішею Escape або
натисканням на затемнену область.

## Запуск

Потрібні Node.js 24+, npm і [доступ до TMDB API](https://www.themoviedb.org/settings/api).

1. Скопіюй `.env.example` у `.env`.
2. Для локального запуску за умовою GoIT заповни `VITE_TMDB_TOKEN` значенням
   API Read Access Token. Якщо маєш API Key (v3), заповни `TMDB_API_KEY`.
3. Запусти `npm ci` і `npm run dev`.

Для перевірки запусти `npm run lint` і `npm run build`. На Vercel задай `TMDB_API_KEY`
для Production. У цьому режимі запит до TMDB виконує серверна функція `/api/movies`.

Стилі компонентів із [репозиторію GoIT](https://github.com/goitacademy/react-movies-styles).

Адаптовано з [03-react-movies Софії Дорош](https://github.com/sofiiadorosh/03-react-movies).
