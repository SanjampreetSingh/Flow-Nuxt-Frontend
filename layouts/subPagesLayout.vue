<template>
  <div>
    <nav-bar />
    <nuxt />
    <copyright-strip />
  </div>
</template>
<script>
import NavBar from '~/components/layout/default/NavBar'
import CopyrightStrip from '~/components/layout/default/CopyrightStrip'
export default {
  middleware: 'guest',
  components: {
    NavBar,
    CopyrightStrip
  }
}
</script>
