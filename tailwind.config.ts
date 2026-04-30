import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'dj-red':     'var(--red)',
        'dj-gold':    'var(--gold)',
        'dj-bg':      'var(--bg)',
        'dj-surface': 'var(--surface)',
        'dj-text':    'var(--text)',
        'dj-muted':   'var(--muted)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body:    ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
