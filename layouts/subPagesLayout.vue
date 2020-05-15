<template>
  <div>
    <nav-bar />
    <nuxt />
    <dark-mode />
    <copyright-strip />
  </div>
</template>
<script>
import NavBar from '~/components/layout/subPages/NavBar'
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
        url: 'https://theflowai.com/',
        publisher: {
          '@type': 'Organization',
          name: 'Flow',
          logo: {
            '@type': 'ImageObject',
            url: '/icon.png',
            height: 640,
            width: 640
          }
        },
        name: 'Flow',
        description:
          'Small to large businesses can very easily leverage the capabilities of precise machine learning model interfaces in their workflow.',
        sameAs: [
          'https://www.facebook.com/flowml/',
          'https://twitter.com/Flow_ArtInt',
          'https://www.instagram.com/flow_artint/',
          'https://www.linkedin.com/company/flow-artint/'
        ]
      }
    }
  },
  head() {
    return {
      meta: [
        {
          property: 'og:title',
          content: `Flow | Machine Intelligence Platform for Developers and Researchers`
        },
        {
          property: 'og:description',
          content: `Small to large businesses can very easily leverage the capabilities of precise machine learning model interfaces in their workflow.`
        },
        {
          property: 'og:type',
          content: `website`
        },
        {
          property: 'og:url',
          content: `https://theflowai.com/`
        },
        {
          property: 'og:image',
          content: 'https://theflowai.com/icon.png'
        },
        {
          name: 'twitter:card',
          content: `Flow | Machine Intelligence Platform`
        },
        {
          name: 'twitter:card',
          content: `summary`
        },
        {
          name: 'twitter:url',
          content: `https://theflowai.com/`
        },
        {
          name: 'twitter:title',
          content: `Flow | Machine Intelligence Platform for Developers and Researchers`
        },
        {
          name: 'twitter:description',
          content: `Small to large businesses can very easily leverage the capabilities of precise machine learning model interfaces in their workflow.`
        },
        {
          name: 'twitter:image',
          content: 'https://theflowai.com/icon.png'
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
            'Flow | Machine Intelligence Platform for Developers and Researchers'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://theflowai.com' + this.$route.path
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
