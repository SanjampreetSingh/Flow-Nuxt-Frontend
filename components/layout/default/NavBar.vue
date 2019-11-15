<template>
  <header>
    <nav :class="{ navbarScroll: navbarScroll }" class="navbar is-fixed-top">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link to="/" class="navbar-item" aria-label="home">
            <logo id="logo" />
          </nuxt-link>
          <div
            :class="{ 'is-active': show }"
            @click="toggleShow"
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
          <div id="nav-list" class="navbar-end">
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
  box-shadow: 0 0 20px rgb(41, 41, 41);
}
.navbar {
  /* transition: 0.1s linear; */
  background: rgba(var(--bg-color), 0.6);
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
/* #nav-list a {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  padding: 11px 14px;
  color: #000;
  text-transform: uppercase;
  position: relative;
  border: 1px solid transparent;
  border-radius: 5px;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  margin: 14px 4px;
}
#nav-list a::before,
a::after {
  position: absolute;
  content: '';
  width: 32px;
  height: 2px;
  background-color: #000;
  left: 50%;
  margin: 0 2px;
  top: 0;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  -webkit-transform: translateX(-50%) scaleX(0);
  -moz-transform: translateX(-50%) scaleX(0);
  -ms-transform: translateX(-50%) scaleX(0);
  -o-transform: translateX(-50%) scaleX(0);
  transform: translateX(-50%) scaleX(0);
}
#nav-list a:hover {
  background: none;
  border: 1px solid rgba(0, 0, 0, 1);
}
#nav-list a::after {
  top: auto;
  bottom: 0;
}
#nav-list a:hover::before,
a:hover::after {
  -webkit-transform: translateX(-50%) scaleX(1);
  -moz-transform: translateX(-50%) scaleX(1);
  -ms-transform: translateX(-50%) scaleX(1);
  -o-transform: translateX(-50%) scaleX(1);
  transform: translateX(-50%) scaleX(1);
} */
</style>
