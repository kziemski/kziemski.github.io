import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import yaml from '@rollup/plugin-yaml';


// https://astro.build/config
export default defineConfig({
  site: 'https://kryspinziemski.info',
  integrations: [tailwind()],
  outDir: './docs',
  vite: {
    plugins:[yaml()],
    ssr: {
      external: ['svgo'],
    },
  },
});