<template>
  <header>
    <nav class="navbar is-transparent navbarScroll is-fixed-top">
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
            <a class="navbar-item">Demo</a>
            <a class="navbar-item">Documentation</a>
            <div class="navbar-item">
              <nuxt-link
                to="/login"
                exact-active-class="is-static"
                id="login-btn"
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
#login-btn {
  background: #000;
  padding: 10px 15px;
  border-radius: 5px;
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
