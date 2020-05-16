<template>
  <div>
    <nav-bar />
    <nuxt />
    <!-- <foot /> -->
    <dark-mode />
    <copyright-strip />
  </div>
</template>
<script>
import NavBar from '~/components/layout/default/NavBar'
import DarkMode from '~/components/general/DarkMode'
import CopyrightStrip from '~/components/layout/default/CopyrightStrip'

export default {
  components: {
    NavBar,
    DarkMode,
    CopyrightStrip
  },
  data() {
    return {
      structuredData: {
        '@context': 'http://www.schema.org',
        '@type': 'Website',
        url: 'https://theSieyai.com/',
        publisher: {
          '@type': 'Organization',
          name: 'Siey',
          logo: {
            '@type': 'ImageObject',
            url: '/icon.png',
            height: 640,
            width: 640
          }
        },
        name: 'Siey',
        description:
          'Small to large businesses can very easily leverage the capabilities of precise machine learning model interfaces in their workSiey.',
        sameAs: [
          'https://www.facebook.com/Sieyml/',
          'https://twitter.com/Siey_ArtInt',
          'https://www.instagram.com/Siey_artint/',
          'https://www.linkedin.com/company/Siey-artint/'
        ]
      }
    }
  },
  head() {
    return {
      meta: [
        {
          property: 'og:title',
          content: `Siey | Machine Intelligence Platform for Developers and Researchers`
        },
        {
          property: 'og:description',
          content: `Small to large businesses can very easily leverage the capabilities of precise machine learning model interfaces in their workSiey.`
        },
        {
          property: 'og:type',
          content: `website`
        },
        {
          property: 'og:url',
          content: `https://theSieyai.com/`
        },
        {
          property: 'og:image',
          content: 'https://theSieyai.com/icon.png'
        },
        {
          name: 'twitter:card',
          content: `Siey | Machine Intelligence Platform`
        },
        {
          name: 'twitter:card',
          content: `summary`
        },
        {
          name: 'twitter:url',
          content: `https://theSieyai.com/`
        },
        {
          name: 'twitter:title',
          content: `Siey | Machine Intelligence Platform for Developers and Researchers`
        },
        {
          name: 'twitter:description',
          content: `Small to large businesses can very easily leverage the capabilities of precise machine learning model interfaces in their workSiey.`
        },
        {
          name: 'twitter:image',
          content: 'https://theSieyai.com/icon.png'
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes'
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black'
        },
        {
          name: 'apple-mobile-web-app-title',
          content:
            'Siey | Machine Intelligence Platform for Developers and Researchers'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://theSieyai.com' + this.$route.path
        }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: JSON.stringify(this.structuredData),
          type: 'application/ld+json'
        }
      ]
    }
  },
  middleware: 'guest'
}
</script>
