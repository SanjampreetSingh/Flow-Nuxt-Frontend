<template>
  <header>
    <div class="container">
      <client-only>
        <b-navbar>
          <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <logo id="logo" />
            </b-navbar-item>
          </template>
          <template slot="end">
            <b-navbar-item>
              <nuxt-link to="/dashboard/ready-models/demo">Demo</nuxt-link>
            </b-navbar-item>
            <b-navbar-item>
              <nuxt-link to="/dashboard">Documentation</nuxt-link>
            </b-navbar-item>
            <b-navbar-dropdown label="Settings">
              <b-navbar-item>
                <nuxt-link to="/dashboard">Profile</nuxt-link>
              </b-navbar-item>
              <b-navbar-item>
                <a @click="logout">Log out</a>
              </b-navbar-item>
            </b-navbar-dropdown>
          </template>
        </b-navbar>
      </client-only>
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
    }
  }
}
</script>
<style>
#logo {
  width: 25%;
  height: auto;
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
