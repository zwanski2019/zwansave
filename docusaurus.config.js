import {themes as prismThemes} from 'prism-react-renderer';

export default {
  title: 'Creative Hub Ennejma Ezzahra',
  tagline: 'Le laboratoire créatif pour que vos idées deviennent réalité',
  url: 'https://your-docusaurus-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'creative-hub',
  projectName: 'creative-hub',

  themeConfig: {
    navbar: {
      logo: {
        alt: 'Creative Hub Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: 'Accueil',
          position: 'right',
        },
        {
          to: '/presentation',
          label: 'Présentation',
          position: 'right',
        },
        {
          to: '/activites',
          label: 'Nos Activités',
          position: 'right',
        },
        {
          to: '/partenaires',
          label: 'Nos Partenaires',
          position: 'right',
        },
        {
          to: '/contact',
          label: 'Contact',
          position: 'right',
        },
      ],
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      },
    ],
  ],
};

