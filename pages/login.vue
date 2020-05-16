<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <!-- <social-login v-if="!isEmail" />
        <email-login v-else />
        <div class="columns">
          <div class="column">
            <p class="has-text-centered">
              You can also
              <a v-if="!isEmail" @click="toggleEmail">continue with email</a>
              <a v-else @click="toggleEmail">continue with Github or GitLab</a>
            </p>
          </div>
        </div>-->
        <email-login />
      </div>
    </div>
  </section>
</template>
<script>
// import SocialLogin from '~/components/layout/default/SocialLogin'
import EmailLogin from '~/components/layout/default/EmailLogin'
export default {
  layout: 'subPagesLayout',
  components: {
    // SocialLogin,
    EmailLogin
  },
  data() {
    return {
      isEmail: false
    }
  },
  head() {
    return {
      title: 'Get Started | Siey'
    }
  },
  methods: {
    toggleEmail() {
      this.isEmail = !this.isEmail
    }
  }
}
</script>
