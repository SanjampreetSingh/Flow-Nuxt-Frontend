<template>
  <section
    v-if="application.id != null"
    id="dashboard-app-header-section"
    class="section has-background-light section-border-bottom"
  >
    <div class="container">
      <div class="columns">
        <div class="column is-1 is-hidden-mobile">
          <avatar :username="application.name" :size="100" />
        </div>
        <div id="title-col" class="column has-text-centered-mobile">
          <h1 id="title" class="title is-1 is-black">
            {{ application.name | capitalize }}
          </h1>
          <p id="sub-title" class="subtitle has-text-weight-bold is-6">
            API KEY
            <span class="has-text-weight-normal">
              <span>/</span>
              <a v-if="!show" @click="toggle">
                <strong>SHOW</strong>
              </a>
              <a v-else @click="copyToClipboard">
                {{ application.apikey_value }}
              </a>
            </span>
          </p>
        </div>
      </div>
      <div id="nav-list" class="columns">
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
    </div>
  </section>
</template>
<script>
import Avatar from 'vue-avatar'
export default {
  components: {
    Avatar
  },
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  props: {
    application: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      show: false,
      activeTab: 0,
      tabs: [
        {
          name: 'About App',
          link: '/dashboard/application/' + this.application.reference_url
        },
        {
          name: 'App Usage',
          link:
            '/dashboard/application/' +
            this.application.reference_url +
            '/usage/'
        }
        // {
        //   name: 'Settings',
        //   link: '/dashboard/settings/'
        // }
      ]
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    },
    async copyToClipboard() {
      try {
        await this.$copyText(this.application.apikey_value)
        this.showMsg('Copied to clipboard.', 'is-info')
      } catch (e) {
        // eslint-disable-next-line
        console.error(e)
      }
    }
  }
}
</script>
<style scoped>
#title-col {
  padding-left: 35px;
}
#title {
  margin: 8px 0;
}
#sub-title {
  margin: 0;
}
#sub-title strong {
  color: #0070f3;
}
#dashboard-app-header-section {
  padding-bottom: 0px;
}
.tabs a {
  color: #949292;
  border-bottom-width: 0;
}
.tabs li.is-active a {
  border-bottom-color: rgb(var(--bg-color));
  color: #000000;
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
#nav-list.columns:last-child {
  margin-bottom: 0px;
}
@media screen and (max-width: 768px) {
  #title-col {
    padding-left: 0;
  }
}
</style>
