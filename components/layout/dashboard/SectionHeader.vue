<template>
  <section class="section section-border-bottom has-text-centered-mobile">
    <h1 class="title">{{ title }}</h1>
    <p class="is-6 has-text-weight-light">
      <nuxt-link to="/dashboard/">
        <span class="icon">
          <i class="fa fa-arrow-left"></i>
        </span>
        Back to Dashboard
      </nuxt-link>
    </p>
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
