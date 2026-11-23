import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TROCAR pelo domínio real quando registrarmos (ex.: https://mzrcode.com.br)
export default defineConfig({
  site: 'https://mzrcode.com.br',
  integrations: [sitemap()],
});
