// Dados centrais do site. Os textos vêm de src/content/settings.json (editável pelo CMS em /admin).
import settings from '../content/settings.json';

const toWa = (display: string) => '55' + display.replace(/\D/g, '');

export const site = {
  name: settings.name,
  url: 'https://mzrcode.netlify.app', // TODO: trocar quando registrarmos o domínio
  tagline: settings.tagline,
  taglineLong: settings.taglineLong,
  region: settings.region,
  email: settings.email,
  phones: settings.phones.map((p) => ({ label: p.label, display: p.number, wa: toWa(p.number) })),
};

export const waLink = (
  text = 'Olá! Vim pelo site da MzRCode e gostaria de um orçamento.',
  phone = site.phones[0].wa,
) => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: '/servicos/', label: 'Serviços' },
  { href: '/cases/', label: 'Cases' },
  { href: '/como-trabalhamos/', label: 'Como trabalhamos' },
  { href: '/sobre/', label: 'Sobre nós' },
  { href: '/contato/', label: 'Contato' },
];
