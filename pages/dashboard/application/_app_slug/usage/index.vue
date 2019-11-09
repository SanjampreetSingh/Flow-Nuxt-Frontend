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
            <div class="columns has-text-centered">
              <div class="column">
                <div class="title primary-text-color">
                  {{ usage.bucket }} <span class="alt-text">Calls</span>
                </div>
                <div class="subtitle primary-text-color">
                  Bucket
                </div>
              </div>
              <!-- <div class="is-divider-vertical" data-content="OR"></div> -->
              <div class="column">
                <div class="title primary-text-color">
                  {{ usage.usage }} <span class="alt-text">Calls</span>
                </div>
                <div class="subtitle primary-text-color">
                  Usage
                </div>
              </div>
              <div class="column">
                <div class="title primary-text-color">
                  {{ usage.threshold }} <span class="alt-text">Calls</span>
                </div>
                <div class="subtitle primary-text-color">
                  Threshold
                </div>
              </div>
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
      usage: {},
      loader: false,
      disabled: false
    }
  },
  async asyncData(context) {
    try {
      const [
        appResponse,
        modelInfoResponse
        // appUsageResponse
      ] = await Promise.all([
        context.app.$repository.application.show(context.params.app_slug),
        context.app.$repository.module.show('ready')
        // context.$axios.post('/user/usage-ready-api/' + application.id)
      ])
      return {
        application: appResponse,
        module: modelInfoResponse.data.module
        // usage: appUsageResponse
      }
    } catch (e) {
      context.error({ statusCode: 404, message: 'Application not found' })
    }
  },
  created() {
    this.$axios
      .get('/user/usage-ready-api/' + this.application.id)
      .then((response) => {
        this.usage = response.data.data.readyApiUsageBucketData
      })
  },
  methods: {
    async activate(apiId) {
      this.loader = true
      this.disabled = true
      try {
        await this.$axios
          .$post('/user/ready/app/activate/', {
            app: this.application.id
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
.alt-text {
  font-size: 20px;
  /* color: #a9a8a8; */
  text-transform: lowercase;
}
</style>
