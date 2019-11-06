<template>
  <div>
    <app-header :application="application" />
    <section class="section">
      <div class="container">
        <h1 class="title primary-text-color is-3">Your Models</h1>
        <p class="subtitle is-6 primary-text-color fix-height">
          A list of active API's in your application.
        </p>
        <client-only>
          <b-table
            :data="isEmpty ? [] : activatedApis"
            :hoverable="isHoverable"
            :loading="isLoading"
            :mobile-cards="hasMobileCards"
          >
            <template slot-scope="props">
              <!-- <b-table-column field="id" label="ID" width="40" numeric>
                {{ props.row.id }}
              </b-table-column> -->
              <b-table-column field="name" label="Name">
                {{ props.row }}
              </b-table-column>
              <!-- <b-table-column field="active" label="Deactivate">
                <a class="tag is-danger" @click="activate(props.row.id)">
                  Deactive
                </a>
              </b-table-column> -->
              <b-table-column field="actions" label="Actions">
                <nuxt-link
                  :to="
                    '/dashboard/application/' +
                      application.reference_url +
                      '/readyModels/demo/'
                  "
                >
                  Demo
                </nuxt-link>
              </b-table-column>
            </template>
            <template slot="empty">
              <section class="section">
                <div class="content has-text-grey has-text-centered">
                  <p>
                    <i class="far fa-3x fa-frown-open"></i>
                  </p>
                  <p>Activate models.</p>
                </div>
              </section>
            </template>
          </b-table>
        </client-only>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title primary-text-color is-3">Modules</h1>
        <p class="subtitle is-6 primary-text-color fix-height">
          Select the modules and add them to your application.
        </p>
        <div v-if="modules.length > 0" class="columns">
          <div v-for="module in modules" :key="module.id" class="column is-4">
            <div class="card">
              <nuxt-link
                v-if="module.active"
                :to="application.reference_url + '/readyModels/'"
                class="has-text-dark"
              >
                <div class="card-image card-img-block has-text-centered">
                  <i class="fa fa-5x fa-plus"></i>
                </div>
              </nuxt-link>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{ module.name }}</p>
                    <p class="subtitle is-6 fix-height">
                      {{ module.tagline }}
                    </p>
                  </div>
                </div>
                <div class="content">
                  <nuxt-link
                    v-if="module.active"
                    :to="application.reference_url + '/readyModels/'"
                  >
                    <p class="has-text-weight-bold">
                      Add Model
                      <span class="icon">
                        <i class="fa fa-arrow-right"></i>
                      </span>
                    </p>
                  </nuxt-link>
                  <p v-else class="has-text-weight-bold">
                    Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import AppHeader from '~/components/layout/dashboard/AppHeader'
export default {
  middleware: 'auth',
  layout: 'dashboard',
  components: {
    AppHeader
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
      modules: [],
      moduleChange: false,
      models: []
    }
  },
  async asyncData(context) {
    try {
      const [appResponse, modulesResponse] = await Promise.all([
        context.app.$repository.application.show(context.params.app_slug),
        context.app.$repository.module.index()
      ])
      // console.log(modulesResponse.data.modules.length)
      return {
        application: appResponse,
        activatedApis: appResponse.ready_apis,
        modules: modulesResponse.data.modules
      }
    } catch (e) {
      context.error({ statusCode: 404, message: 'Application not found' })
    }
  },
  created() {
    this.reloadApis()
  },
  methods: {
    reloadApis() {
      // if (this.activatedApisNames != null) {
      //   this.activatedApis = this.models.filter(({ name }) =>
      //     this.activatedApisNames.includes(name)
      //   )
      //   this.models = this.models.filter(
      //     ({ name }) => !this.activatedApisNames.includes(name)
      //   )
      // }
      if (!this.activatedApis) {
        this.isLoading = false
        this.isEmpty = true
      } else {
        this.isLoading = false
        this.isEmpty = false
      }
    },
    async fetchModels(referenceUrl) {
      try {
        const moduleResponse = await this.$axios.get(referenceUrl + '/api')
        this.moduleChange = !this.moduleChange
        // console.log(moduleResponse.data.data.readyApis)
        this.models = moduleResponse.data.data.readyApis
        this.reloadApis()
      } catch (e) {
        // this.$error({ statusCode: 404, message: 'Models not found' })
      }
    }
  }
}
</script>
<style scoped>
.card-img-block {
  padding: 50px;
  background: #f5f5f5;
}
</style>
