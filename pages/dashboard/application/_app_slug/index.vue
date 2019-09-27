<template>
  <div>
    <section class="section has-background-light section-border-bottom">
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
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title is-3">Your Models</h1>
        <client-only>
          <b-table
            :data="isEmpty ? [] : activatedApis"
            :hoverable="isHoverable"
            :loading="isLoading"
            :mobile-cards="hasMobileCards"
          >
            <template slot-scope="props">
              <b-table-column field="id" label="ID" width="40" numeric>
                {{ props.row.id }}
              </b-table-column>
              <b-table-column field="name" label="Name">
                {{ props.row.name }}
              </b-table-column>
              <b-table-column field="active" label="Deactivate">
                <a class="tag is-danger" @click="action('R', props.row.id)">
                  Deactive
                </a>
              </b-table-column>
              <b-table-column field="actions" label="Actions">
                <nuxt-link to="/dashboard/demo">Demo</nuxt-link>
              </b-table-column>
            </template>
            <template slot="empty">
              <section class="section">
                <div class="content has-text-grey has-text-centered">
                  <p>
                    <i class="far fa-3x fa-frown-open"></i>
                  </p>
                  <p>Nothing here.</p>
                </div>
              </section>
            </template>
          </b-table>
        </client-only>
      </div>
    </section>
  </div>
</template>
<script>
import Avatar from 'vue-avatar'
export default {
  middleware: 'auth',
  layout: 'dashboard',
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
  data() {
    return {
      application: {},
      isEmpty: true,
      isHoverable: true,
      isLoading: true,
      hasMobileCards: true,
      activatedApisNames: [],
      activatedApis: [],
      show: false
    }
  },
  asyncData(context) {
    return context.app.$repository.application
      .show(context.params.app_slug)
      .then((response) => {
        console.log(response)
        return {
          application: response,
          activatedApisNames: response.active_apis
        }
      })
      .catch((e) => {
        context.error({ statusCode: 404, message: 'Application not found' })
      })
  },
  created() {
    this.isLoading = false
    this.reloadApis()
  },
  methods: {
    reloadApis() {
      if (this.activatedApisNames != null) {
        this.activatedApis = this.apis.filter(({ name }) =>
          this.activatedApisNames.includes(name)
        )
        this.apis = this.apis.filter(
          ({ name }) => !this.activatedApisNames.includes(name)
        )
      }
    },
    toggle() {
      this.show = !this.show
    },
    async copyToClipboard() {
      try {
        await this.$copyText(this.application.apikey_value)
        this.showMsg('Copied to clipboard.', 'is-info')
      } catch (e) {
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
@media screen and (max-width: 768px) {
  #title-col {
    padding-left: 0;
  }
}
</style>
