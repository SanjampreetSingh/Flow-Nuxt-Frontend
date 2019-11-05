<template>
  <header>
    <nav class="navbar is-fixed-top">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link to="/" class="navbar-item">
            <logo id="logo" />
          </nuxt-link>
          <div
            class="navbar-burger burger"
            :class="{ 'is-active': show }"
            data-target="navbarExampleTransparentExample"
            @click="toggleShow"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          id="navbarExampleTransparentExample"
          class="navbar-menu"
          :class="{ 'is-active': show }"
        >
          <div class="navbar-end">
            <nuxt-link to="/demo" class="navbar-item nav-item-spacing">
              Demo
            </nuxt-link>
            <a
              href="https://docs.theflowai.com"
              target="_blank"
              class="navbar-item nav-item-spacing"
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
</style>
