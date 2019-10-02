<template>
  <header>
    <nav class="navbar is-fixed-top" :class="{ navbarScroll: navbarScroll }">
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
      show: false,
      navbarScroll: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    toggleShow() {
      this.show = !this.show
    },
    updateScroll() {
      if (window.scrollY > 10) {
        this.navbarScroll = true
      } else {
        this.navbarScroll = false
      }
    }
  },
  destroy() {
    window.removeEventListener('scroll', this.updateScroll)
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
.navbarScroll {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: hsla(0, 0%, 100%, 0.6);
  box-shadow: 0 0 20px #a7a7a7;
}
.navbar {
  /* transition: 0.1s linear; */
  background: hsla(0, 0%, 100%, 0.6);
}
.navbar-item img {
  max-height: 3.75rem;
}
.navbar-item {
  font-weight: 700;
  padding-top: 20px;
  padding-bottom: 20px;
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
