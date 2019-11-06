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
  head() {
    return {
      meta: [
        {
          property: 'og:title',
          content: `Flow | Machine Intelligence Platform for Developers and Researchers`
        },
        {
          property: 'og:description',
          content: `Corporations ranging from small to large scales can very easily leverage the capabilities of our trained precise machine learning model interfaces in their workflow. A powerful research platform for researchers and developers.`
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
          content: `Corporations ranging from small to large scales can very easily leverage the capabilities of our trained precise machine learning model interfaces in their workflow. A powerful research platform for researchers and developers.`
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
      ]
    }
  },
  middleware: 'guest',
  components: {
    NavBar,
    DarkMode,
    CopyrightStrip
  }
}
</script>
