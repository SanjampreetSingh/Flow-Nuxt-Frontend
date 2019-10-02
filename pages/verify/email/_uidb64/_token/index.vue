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
  created() {
    try {
      this.$axios
        .post('verify/email/', {
          uidb64: this.$route.params.uidb64,
          token: this.$route.params.token
        })
        .then((response) => {
          this.status = response.data.message
          this.$router.replace('/login')
        })
    } catch (e) {
      this.status = 'Verification failed'
    }
  }
}
</script>
<style scoped>
#content {
  margin-top: 70px;
}
</style>
