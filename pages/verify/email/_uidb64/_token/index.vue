<template>
  <div>
    <section id="content" class="section">
      <div class="container">
        <article class="message is-success">
          <div class="message-body">
            {{ status }}
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  auth: false,
  data() {
    return {
      status: 'verifying...'
    }
  },
  async asyncdata({ app }) {
    try {
      await app.$axios
        .post('verify/email/', {
          uidb64: app.$route.params.uidb64,
          token: app.$route.params.token
        })
        .then((response) => {
          app.$router.replace('/login')
          return {
            status: response.data.message
          }
        })
    } catch (e) {
      return {
        status: 'Verification failed'
      }
    }
  }
}
</script>
<style scoped>
#content {
  margin-top: 70px;
}
</style>
