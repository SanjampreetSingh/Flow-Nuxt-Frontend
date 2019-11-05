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
  middleware: 'guest',
  components: {
    NavBar,
    DarkMode,
    CopyrightStrip
  }
}
</script>
