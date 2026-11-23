import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Endereço provisório da Netlify. TROCAR pelo domínio real quando registrarmos (ex.: https://mzrcode.com.br)
export default defineConfig({
  site: 'https://mzrcode.netlify.app',
  integrations: [sitemap()],
});
