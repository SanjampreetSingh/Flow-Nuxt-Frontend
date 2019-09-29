<template>
  <header>
    <div class="container">
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
              <!-- <a class="navbar-item">Demo</a>
              <a class="navbar-item">Documentation</a> -->
              <a class="navbar-item" @click="logout">
                <i class="fas fa-sign-out-alt icon"></i>
                <span>Logout</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div id="nav-list">
      <div class="tabs container">
        <ul>
          <li
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{ 'is-active': activeTab === index }"
            @click="activeTab = index"
          >
            <nuxt-link :to="tab.link">
              <span>{{ tab.name }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
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
      activeTab: 0,
      show: false,
      tabs: [
        {
          name: 'Overview',
          link: '/dashboard/'
        },
        {
          name: 'Usage',
          link: '/dashboard/usage/'
        },
        {
          name: 'Settings',
          link: '/dashboard/settings/'
        }
      ]
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
    toggleShow() {
      this.show = !this.show
    }
  }
}
</script>
<style>
#logo {
  width: 25%;
  height: auto;
}
.icon {
  margin-right: 5px;
  margin-top: 10px;
}
.tabs a {
  color: #949292;
  border-bottom-width: 0;
}
.tabs li.is-active a {
  border-bottom-color: #000;
  color: #000;
  font-weight: 500;
  border-width: 2px;
}
.b-tabs .tab-content {
  display: none;
}
.tabs ul {
  border: 0;
}
#nav-list {
  border-bottom: 1px solid #dbdbdb;
}
.navbar-item a {
  color: #000;
}
</style>
