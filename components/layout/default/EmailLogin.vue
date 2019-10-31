<!-- Login and Register through Email -->
<template>
  <div>
    <div class="columns is-centered">
      <div class="column is-6">
        <h1 class="title is-1 has-text-centered primary-text-color">
          Get Started with Flow
        </h1>
      </div>
    </div>
    <form @submit.prevent="validate">
      <vue-recaptcha
        ref="recaptcha"
        size="invisible"
        sitekey="6Ldl6boUAAAAAH_jsSRo97SQD3EyJeOSUEVhDcO8"
        @verify="onCaptchaVerified"
        @expired="onCaptchaExpired"
      >
      </vue-recaptcha>
      <div class="columns is-centered">
        <div class="column is-3 pt">
          <p v-if="passwordField">
            <a>
              <i
                id="arrow-left"
                class="fa fa-arrow-left has-text-info"
                @click="resetForm"
              >
              </i>
            </a>
            <strong>Email:</strong>
            {{ user.email }}
          </p>
          <b-field
            v-else
            :type="{ 'is-danger': errors.has('email') }"
            :message="errors.first('email')"
          >
            <input
              id="email"
              v-model="user.email"
              v-validate="{ required: true, email: true }"
              type="email"
              name="email"
              class="input"
              placeholder="Email"
              aria-placeholder="Email"
            />
          </b-field>
        </div>
      </div>
      <div v-if="passwordField" class="columns is-centered">
        <div class="column is-3 pt">
          <b-field
            :type="{ 'is-danger': errors.has('password') }"
            :message="errors.first('password')"
          >
            <input
              id="password"
              v-model="user.password"
              v-validate="{ required: true, min: 6 }"
              type="password"
              name="password"
              class="input"
              placeholder="Password"
              aria-placeholder="Password"
            />
          </b-field>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-3 pt">
          <btn
            type="submit"
            color="is-dark"
            :loading="loader"
            :disabled="disabled"
          >
            <span v-if="key == 1" class="content">Register</span>
            <span v-else-if="key == 2" class="content">Login</span>
            <span v-else class="content">Continue</span>
          </btn>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import VueRecaptcha from 'vue-recaptcha'
import Btn from '~/components/general/Button'
import formMixin from '~/mixins/formMixin.js'
export default {
  components: {
    Btn,
    VueRecaptcha
  },
  mixins: [formMixin],
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      key: null,
      passwordField: false
    }
  },
  methods: {
    submit() {
      this.$refs.recaptcha.execute()
    },
    onCaptchaVerified(recaptchaToken) {
      if (!this.key) {
        try {
          this.$axios
            .post('/check/user/', { email: this.user.email })
            .then((response) => {
              this.key = response.data.data.key
              this.passwordField = true
              this.showMsg(response.data.message, 'is-info')
            })
        } catch (e) {
          // eslint-disable-next-line
          console.log(e)
        } finally {
          this.loader = false
          this.disabled = false
        }
      } else {
        switch (this.key) {
          case 1:
            this.register()
            break
          case 2:
            this.login()
            break
          default:
            this.resetForm()
        }
      }
      this.$refs.recaptcha.reset()
    },
    onCaptchaExpired() {
      this.$refs.recaptcha.reset()
    },
    resetForm() {
      this.passwordField = false
      this.key = null
      this.email = ''
      this.password = ''
    },
    async register() {
      const vm = this
      try {
        await this.$axios.post('register/', {
          email: this.user.email,
          password: this.user.password
        })
        await this.$auth
          .loginWith('local', {
            data: {
              email: this.user.email,
              password: this.user.password
            }
          })
          .then((response) => {
            vm.$router.replace('/dashboard/')
            // window.location.reload()
          })
      } catch (e) {
        this.error = e.response.data.message
      } finally {
        this.loader = false
        this.disabled = false
      }
    },
    async login() {
      const vm = this
      try {
        await this.$auth
          .loginWith('local', {
            data: {
              email: this.user.email,
              password: this.user.password
            }
          })
          .then((response) => {
            vm.$router.replace('/dashboard/')
            // window.location.reload()
          })
      } catch (e) {
        this.error = e.response.data.message
        this.showMsg(e.response.data.message)
      } finally {
        this.loader = false
        this.disabled = false
      }
    }
  }
}
</script>
<style scoped>
.pt {
  padding-top: 0;
}
#arrow-left {
  margin-right: 5px;
}
</style>
