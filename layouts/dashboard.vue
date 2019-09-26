<template>
  <div>
    <div v-if="!verified" class="columns is-marginless">
      <div class="column is-paddingless has-background-danger">
        <p
          id="email-alert"
          class="subtitle is-6 has-text-weight-bold has-text-centered has-text-white"
        >
          Welcome to FLOW! To access all features verify your email first.
        </p>
      </div>
    </div>
    <nav-bar />
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import NavBar from '~/components/layout/dashboard/NavBar'
export default {
  middleware: 'auth',
  components: {
    NavBar
  },
  data() {
    return {
      verified: this.$auth.user.verified
    }
  },
  computed: {
    ...mapGetters(['loggedInUser'])
  }
}
</script>
<style scoped>
#email-alert {
  padding: 7px 0;
}
</style>
