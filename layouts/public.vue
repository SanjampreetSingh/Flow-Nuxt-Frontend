<template>
  <div>
    <nav-bar />
    <nuxt />
    <!-- <foot />
    <copyright-strip /> -->
  </div>
</template>
<script>
import NavBar from '~/components/layout/default/NavBar'
// import Foot from '~/components/layout/default/Foot'
// import CopyrightStrip from '~/components/layout/default/CopyrightStrip'
export default {
  middleware: 'guest',
  components: {
    NavBar
    // Foot,
    // CopyrightStrip
  }
}
</script>
