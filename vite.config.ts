import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const { TMDB_API_KEY } = loadEnv(mode, process.cwd(), 'TMDB_');

  const proxy = {
    '/api/movies': {
      target: 'https://api.themoviedb.org',
      changeOrigin: true,
      rewrite(path: string) {
        const request = new URL(path, 'http://localhost');
        const params = new URLSearchParams({
          query: request.searchParams.get('query') ?? '',
          api_key: TMDB_API_KEY ?? '',
        });
        return `/3/search/movie?${params}`;
      },
    },
  };

  return {
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
    server: { proxy },
    preview: { proxy },
    build: {
      sourcemap: true,
    },
  };
});
