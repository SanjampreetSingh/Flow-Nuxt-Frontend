<template>
  <client-only>
    <header class="columns">
      <div id="fix-top" class="column navbarScroll">
        <b-navbar class="container">
          <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <logo id="logo" />
            </b-navbar-item>
          </template>
          <template slot="end">
            <b-navbar-item href="#">Demo</b-navbar-item>
            <b-navbar-item href="#">Documentation</b-navbar-item>
            <b-navbar-item tag="div">
              <nuxt-link
                to="/login"
                exact-active-class="is-static"
                class="button"
              >
                Get started
              </nuxt-link>
            </b-navbar-item>
          </template>
        </b-navbar>
      </div>
    </header>
  </client-only>
</template>
<script>
import Logo from '~/assets/img/logo.svg'
export default {
  components: {
    Logo
  }
}
</script>
<style scoped>
#logo {
  width: 25%;
  height: auto;
}
#fix-top {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
}
.navbarScroll {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
}
.navbar {
  background: none;
}
.navbar-item img {
  max-height: 3.75rem;
}
@media only screen and (max-width: 425px) {
  .navbar-item img {
    max-height: 2.75rem;
  }
}
</style>
