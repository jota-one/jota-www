// https://v3.nuxtjs.org/api/configuration/nuxt.config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  okaySuper: false,
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'stylesheet', href: '/fonts/Inter/inter.css' },
        { rel: 'stylesheet', href: '/fonts/Oswald/fontface.css' },
      ],
      script: [
        {
          'defer': true,
          'data-domain': 'jota.one',
          'src': 'https://plausible.io/js/script.js',
        },
      ],
    },
  },
  css: ['@/assets/styles/main.pcss'],
  modules: ['@nuxt/content'],
  content: {
    documentDriven: {
      globals: {
        social: {
          where: [
            {
              _id: 'content:_social.json',
            },
          ],
          without: ['_'],
        },
      },
    },
    markdown: {
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: 'noopener noreferer',
          },
        ],
      ],
    },
  },

  postcss: {
    plugins: {
      'postcss-import': {},
      'postcss-url': {},
      'postcss-nested': {},
      'postcss-custom-media': {},
    },
  },

  vite: {
    plugins: [svgLoader()],
  },
})
