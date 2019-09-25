<template>
  <div>
    <div class="columns is-centered">
      <div class="column is-6">
        <h1 class="title is-1 has-text-centered">Get Started with Flow</h1>
      </div>
    </div>
    <form @submit.prevent="validate">
      <div class="columns is-centered">
        <div class="column is-3 pt">
          <b-field
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
            <span class="content">Continue</span>
          </btn>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { ToastProgrammatic as Toast } from 'buefy'
import Btn from '~/components/general/Button'
export default {
  components: {
    Btn
  },
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      key: null,
      passwordField: false,
      disabled: false,
      loader: false
    }
  },
  methods: {
    validate() {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          this.loader = true
          this.disabled = true
          this.submit()
          return
        }
        Toast.open({
          message: 'Form is not valid! Please check the fields.',
          type: 'is-danger',
          position: 'is-bottom'
        })
      })
    },
    submit() {
      if (!this.key) {
        this.$axios
          .post('/check/user/', { email: this.user.email })
          .then((response) => {
            this.key = response.data.data.key
            this.passwordField = true
          })
          .catch((error) => {
            console.log(error)
          })
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
      this.loader = false
      this.disabled = false
    },
    resetForm() {
      this.passwordField = false
      this.key = null
      this.email = ''
      this.password = ''
    },
    register() {
      this.$axios
        .post('/register/', this.user)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    login() {
      this.$auth
        .loginWith('local', {
          data: {
            email: this.user.email,
            password: this.user.password
          }
        })
        .then((response) => {
          console.log(response)
          this.$router.replace('/dashboard/')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
<style scoped>
.pt {
  padding-top: 0;
}
</style>
