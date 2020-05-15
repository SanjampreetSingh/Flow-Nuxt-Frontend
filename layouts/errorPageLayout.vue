<template>
  <div>
    <nuxt />
    <dark-mode />
  </div>
</template>
<script>
import DarkMode from '~/components/general/DarkMode'

export default {
  components: {
    DarkMode
  },
  head() {
    return {
      meta: [
        {
          property: 'og:title',
          content: `Error | Flow`
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://theflowai.com' + this.$route.path
        }
      ]
    }
  },
  middleware: 'guest'
}
</script>
