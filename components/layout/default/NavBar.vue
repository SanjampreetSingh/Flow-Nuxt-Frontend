<template>
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
              id="login-btn"
              to="/login"
              exact-active-class="is-static"
              class="button"
            >
              Get Started
            </nuxt-link>
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
  </header>
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
#login-btn {
  background: #000;
  color: #fff;
  transition: 0.4s;
}
#login-btn:hover {
  background: #fff;
  color: #000;
  border: 1px solid #000;
}
#login-btn.is-static {
  background: #fff;
  color: #000;
  border: 1px solid #000;
  box-shadow: none;
}
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
