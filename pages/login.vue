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
        </div> -->
        <email-login />
      </div>
    </div>
  </section>
</template>
<script>
// import SocialLogin from '~/components/layout/default/SocialLogin'
import EmailLogin from '~/components/layout/default/EmailLogin'
import ogImage from '~/static/icon.png'
export default {
  head() {
    return {
      meta: [
        {
          property: 'og:title',
          content: `Flow | Machine Intelligence Platform for Developers and Cutting Edge Reseacrh`
        },
        {
          property: 'og:description',
          content: `We are making machine learning technologies easily accessible to developers. Corporations ranging from small to large scales can very easily leverage the capabilities of our trained precise machine learning model interfaces in their workflow. We are also building a powerful research platform where researchers and developers can experiment and deploy their custom machine learning models for their own personal use. The flexibility between choosing to integrate either our already trained or your custom-designed machine learning models will help you to integrate machine learning in your workflow more comfortably.`
        },
        {
          property: 'og:type',
          content: `website`
        },
        {
          property: 'og:url',
          content: `https://www.theflowai.com/`
        },
        {
          property: 'og:image',
          content: ogImage
        },
        {
          name: 'twitter:card',
          content: `Flow | Machine Intelligence Platform`
        },
        {
          name: 'twitter:card',
          content: `summary`
        },
        {
          name: 'twitter:url',
          content: `https://www.theflowai.com/`
        },
        {
          name: 'twitter:title',
          content: `Flow | Machine Intelligence Platform`
        },
        {
          name: 'twitter:description',
          content: `We are making machine learning technologies easily accessible to developers. Corporations ranging from small to large scales can very easily leverage the capabilities of our trained precise machine learning model interfaces in their workflow. We are also building a powerful research platform where researchers and developers can experiment and deploy their custom machine learning models for their own personal use. The flexibility between choosing to integrate either our already trained or your custom-designed machine learning models will help you to integrate machine learning in your workflow more comfortably.`
        },
        {
          name: 'twitter:image',
          content: 'https://www.theflowai.com' + ogImage
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes'
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black'
        },
        {
          name: 'apple-mobile-web-app-title',
          content:
            'Flow | Machine Intelligence Platform for Developers and Cutting Edge Reseacrh'
        }
      ]
    }
  },
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
  methods: {
    toggleEmail() {
      this.isEmail = !this.isEmail
    }
  }
}
</script>
