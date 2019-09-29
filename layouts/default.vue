<template>
  <div>
    <nav-bar />
    <nuxt />
    <foot />
  </div>
</template>
<script>
import NavBar from '~/components/layout/default/NavBar'
import Foot from '~/components/layout/default/Foot'
export default {
  middleware: 'guest',
  components: {
    NavBar,
    Foot
  }
}
</script>
