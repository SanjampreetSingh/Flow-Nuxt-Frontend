<template>
  <header>
    <nav class="navbar is-fixed-top">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link to="/" class="navbar-item" aria-label="home">
            <logo id="logo" />
          </nuxt-link>
          <div
            @click="toggleShow"
            :class="{ 'is-active': show }"
            class="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          id="navbarExampleTransparentExample"
          :class="{ 'is-active': show }"
          class="navbar-menu"
        >
          <div class="navbar-end">
            <nuxt-link to="/demo" class="navbar-item nav-item-spacing">
              Demo
            </nuxt-link>
            <a
              href="https://docs.theflowai.com"
              target="_blank"
              class="navbar-item nav-item-spacing"
              rel="noreferrer nofollow noopener"
            >
              Documentation
            </a>
            <div class="navbar-item">
              <nuxt-link
                to="/login"
                exact-active-class="is-static"
                class="btn-main"
              >
                Get Started
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import Logo from '~/assets/img/logo.svg'
export default {
  components: {
    Logo
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggleShow() {
      this.show = !this.show
    }
  }
}
</script>
<style scoped>
.burger {
  align-self: center;
}
#logo {
  width: 25%;
  height: auto;
}
.navbar {
  /* transition: 0.1s linear; */
  background: rgba(var(--bg-color), 1);
}
.navbar-item img {
  max-height: 3.75rem;
}
.navbar-item {
  font-weight: 700;
  /* padding-top: 20px;
  padding-bottom: 20px; */
  color: rgb(var(--text-color));
}
.nav-item-spacing {
  padding-right: 50px;
}
@media only screen and (max-width: 425px) {
  .navbar-item img {
    max-height: 2.75rem;
  }
}
@media screen and (max-width: 1023px) {
  .navbar-menu {
    background-color: rgba(var(--bg-color), 0.6);
  }
}
</style>
