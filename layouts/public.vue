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
// import Foot from '~/components/layout/default/Foot'
import DarkMode from '~/components/general/DarkMode'
import CopyrightStrip from '~/components/layout/default/CopyrightStrip'
export default {
  middleware: 'guest',
  components: {
    NavBar,
    DarkMode,
    // Foot,
    CopyrightStrip
  }
}
</script>
