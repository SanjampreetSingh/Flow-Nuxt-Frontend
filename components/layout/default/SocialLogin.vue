<template>
  <div>
    <div class="columns is-centered">
      <div class="column is-6">
        <h1 class="title is-1 has-text-centered primary-text-color">
          Get Started with Siey
        </h1>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-3 pt">
        <btn
          id="github-btn"
          color="is-dark"
          :disabled="disabled"
          @click.native="github_login"
        >
          <i id="github-icon" class="fab fa-github"></i>
          <span class="content">Continue with Github</span>
        </btn>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-3 pt">
        <btn color="is-primary" :disabled="disabled">
          <gitlab class="social-btn" />
          <span class="content">Continue with GitLab</span>
        </btn>
      </div>
    </div>
  </div>
</template>
<script>
import Btn from '~/components/general/Button'
import Gitlab from '~/assets/img/gitlab.svg'
export default {
  components: {
    Btn,
    Gitlab
  },
  data() {
    return {
      loader: false,
      disabled: false
    }
  },
  methods: {
    async github_login() {
      try {
        await this.$auth.loginWith('github')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
<style scoped>
.pt {
  padding-top: 0;
}
.content {
  margin-left: 10px;
}
.social-btn {
  width: 10%;
  height: auto;
}
#github-icon {
  font-size: 26px;
}
.github-btn:hover .github-icon {
  color: '#000';
}
</style>
