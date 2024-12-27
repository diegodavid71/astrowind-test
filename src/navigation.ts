import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Ventajas',
      href: getPermalink('/#Ventajas'),
    },
    {
      text: 'Servicios',
      href: getPermalink('/#Servicios'),
    },
    {
      text: 'Reseñas',
      href: getPermalink('/#Testimonials'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/#Contacto'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Politica de privacidad', href: getPermalink('/privacy') },
        { text: 'Terminos y condiciones', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'multiservicios@grupoclever.es', href: 'mailto:multiservicios@grupoclever.es' },
    { text: '601 04 84 59', href: 'tel:601048459' },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: '',
};
