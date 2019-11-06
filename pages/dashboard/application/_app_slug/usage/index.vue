<template>
  <div>
    <app-header :application="application" />
    <div class="container">
      <div class="columns">
        <div class="column">
          <section class="section">
            <h1 class="title primary-text-color is-3">Application Usage</h1>
            <p class="subtitle is-6 primary-text-color fix-height">
              A summary of the usage of your application and API's.
            </p>
            <div class="columns">
              <div class="colunm"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
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
      try {
        await this.$axios
          .$post('/user/ready/app/activate/', {
            api_id: apiId,
            app_reference_url: this.$route.params.app_slug
          })
          .then((response) => {
            this.showMsg('Model activated to you Application.', 'is-info')
          })
      } catch (e) {
        this.showMsg('Model already activated', 'is-danger')
      } finally {
        this.loader = false
        this.disabled = false
      }
    }
  }
}
</script>
<style scoped>
.card-footer {
  border-top: unset;
}
.card-footer-item:not(:last-child) {
  border-right: none;
}
</style>
