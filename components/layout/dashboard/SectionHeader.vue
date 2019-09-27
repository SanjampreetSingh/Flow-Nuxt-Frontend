<template>
  <section
    class="section has-background-light section-border-bottom has-text-centered-mobile"
  >
    <div class="container">
      <h1 class="title">{{ title }}</h1>
      <p class="is-6 has-text-weight-light">
        <nuxt-link to="/dashboard/">
          <span class="icon">
            <i class="fa fa-arrow-left"></i>
          </span>
          Back to Dashboard
        </nuxt-link>
      </p>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
#back-icon {
  font-size: 24px;
  color: #000;
}
</style>
