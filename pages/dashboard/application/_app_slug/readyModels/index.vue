<template>
  <div>
    <app-header :application="application" />
    <div class="container">
      <div class="columns">
        <div class="column">
          <section class="section">
            <h1 class="title is-3">Available Models</h1>
            <div class="columns">
              <div v-for="model in models" :key="model.id" class="column is-6">
                <div class="card">
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">{{ model.name }}</p>
                        <p class="subtitle is-6 fix-height">
                          {{ model.tagline }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <a class="card-footer-item">
                      <p class="has-text-weight-bold">Demo</p>
                    </a>
                    <!-- <a
                      class="card-footer-item has-text-weight-bold has-background-info has-text-white-bis"
                      @click="activate(model.id)"
                    >
                      Activate
                    </a> -->
                    <a class="card-footer-item" @click="activate(model.id)">
                      <btn
                        color="is-info"
                        :loading="loader"
                        :disabled="disabled"
                      >
                        <span>Activate</span>
                      </btn>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="column is-4">
          <section class="section">
            <h1 class="title is-3">{{ module.name }}</h1>
            <p class="has-text-justified">{{ module.description }}</p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from '~/components/layout/dashboard/AppHeader'
import Btn from '~/components/general/Button'
export default {
  middleware: 'auth',
  layout: 'dashboard',
  components: {
    AppHeader,
    Btn
  },
  data() {
    return {
      application: {},
      module: {},
      activatedApisNames: [],
      loader: false,
      disabled: false
    }
  },
  async asyncData(context) {
    try {
      const [
        appResponse,
        modelInfoResponse,
        readyModelApiResponse
      ] = await Promise.all([
        context.app.$repository.application.show(context.params.app_slug),
        context.app.$repository.module.show('ready'),
        context.$axios.get('/ready/api')
      ])
      return {
        application: appResponse,
        module: modelInfoResponse.data.module,
        models: readyModelApiResponse.data.data.readyApis
      }
    } catch (e) {
      context.error({ statusCode: 404, message: 'Application not found' })
    }
  },
  methods: {
    async activate(apiId) {
      this.loader = true
      this.disabled = true
      await this.$axios
        .$post('/user/ready/app/activate', {
          api_id: apiId,
          app_reference_url: this.$route.params.app_slug
        })
        .then((response) => {
          this.loader = false
          this.disabled = false
          this.showMsg('Model activated to you Application.', 'is-info')
        })
    }
  }
}
</script>
