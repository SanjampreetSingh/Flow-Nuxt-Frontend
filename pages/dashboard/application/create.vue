<!-- Application Create -->
<template>
  <div>
    <section-header title="Create New Application" />
    <div class="container">
      <div class="section columns">
        <div class="column primary-text-color is-3">
          <p>App Details</p>
        </div>
        <div class="column">
          <b-message v-if="formStatus" type="is-success">
            {{ formStatus }}
          </b-message>
          <form @submit.prevent="validate">
            <vue-recaptcha
              ref="recaptcha"
              size="invisible"
              sitekey="6Ldl6boUAAAAAH_jsSRo97SQD3EyJeOSUEVhDcO8"
              @verify="onCaptchaVerified"
              @expired="onCaptchaExpired"
            >
            </vue-recaptcha>
            <client-only>
              <b-field
                label="Application Name"
                class="primary-text-color"
                :type="{ 'is-danger': errors.has('name') }"
                :message="errors.first('name')"
              >
                <input
                  id="name"
                  v-model="application.name"
                  v-validate="{ required: true, min: 3, max: 50 }"
                  type="text"
                  name="name"
                  class="input"
                  placeholder="Application Name"
                  aria-placeholder="Application Name"
                />
              </b-field>
            </client-only>
            <div class="columns is-vcentered">
              <div class="column is-8">
                <input
                  id="slug"
                  v-model="slug"
                  type="text"
                  name="slug"
                  class="input"
                  placeholder="Application Slug"
                  aria-placeholder="Application Slug"
                  disabled
                />
              </div>
              <div class="column">
                <btn
                  type="submit"
                  color="is-dark"
                  :loading="loader"
                  :disabled="disabled"
                >
                  <span>Create</span>
                </btn>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import VueRecaptcha from 'vue-recaptcha'
import SectionHeader from '~/components/layout/dashboard/SectionHeader'
import Btn from '~/components/general/Button'
import formMixin from '~/mixins/formMixin.js'
export default {
  middleware: 'auth',
  layout: 'dashboard',
  components: {
    SectionHeader,
    Btn,
    VueRecaptcha
  },
  mixins: [formMixin],
  data() {
    return {
      application: {
        name: ''
      }
    }
  },
  computed: {
    slug() {
      const slug = this.sanitizeTitle(this.application.name)
      return slug
    },
    ...mapGetters(['loggedInUser'])
  },
  methods: {
    sanitizeTitle(title) {
      let slug = ''
      const titleLower = title.toLowerCase()
      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e')
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a')
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o')
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u')
      slug = slug.replace(/đ/gi, 'd')
      slug = slug.replace(/\s*$/g, '')
      slug = slug.replace(/\s+/g, '-')
      return slug
    },
    submit() {
      if (this.$auth.user.verified) {
        this.$refs.recaptcha.execute()
      } else {
        this.showMsg('Please verify your email.')
        this.loader = false
        this.disabled = false
      }
    },
    async onCaptchaVerified(recaptchaToken) {
      const vm = this
      try {
        await this.$repository.application.create({
          user: vm.loggedInUser.id,
          name: vm.application.name,
          reference_url: vm.loggedInUser.id + '-' + vm.slug
        })
        vm.formStatus = 'Application created successfully.'
      } catch (e) {
        vm.showMsg('Application already exists with this name.')
      }
      this.$refs.recaptcha.reset()
      this.loader = false
      this.disabled = false
    },
    onCaptchaExpired() {
      this.$refs.recaptcha.reset()
    }
  }
}
</script>
