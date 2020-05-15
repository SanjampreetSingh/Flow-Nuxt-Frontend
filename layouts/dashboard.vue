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
    <nuxt />
    <dark-mode />
    <copyright-strip />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import NavBar from '~/components/layout/dashboard/NavBar'
import DarkMode from '~/components/general/DarkMode'
import CopyrightStrip from '~/components/layout/default/CopyrightStrip'
export default {
  middleware: 'auth',
  components: {
    NavBar,
    DarkMode,
    CopyrightStrip
  },
  data() {
    return {
      verified: this.$auth.user.verified
    }
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://theflowai.com' + this.$route.path
        }
      ]
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
