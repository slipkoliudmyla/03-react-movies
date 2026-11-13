import { env } from 'node:process';

export async function GET(request: Request) {
  const query = new URL(request.url).searchParams.get('query')?.trim();
  if (!query) {
    return Response.json({ error: 'Enter a movie title.' }, { status: 400 });
  }

  const apiKey = env.TMDB_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: 'Movie search is unavailable.' },
      { status: 503 },
    );
  }

  const url = new URL('https://api.themoviedb.org/3/search/movie');
  url.searchParams.set('query', query);
  url.searchParams.set('api_key', apiKey);

  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!response.ok) {
      throw new Error('TMDB request failed');
    }
    return Response.json(await response.json());
  } catch {
    return Response.json({ error: 'Could not load movies.' }, { status: 502 });
  }
}
