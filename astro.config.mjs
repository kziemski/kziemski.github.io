import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import yaml from '@rollup/plugin-yaml';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  outdir: './docs',
  vite: {
    plugins:[yaml()],
    ssr: {
      external: ['svgo'],
    },
  },
});