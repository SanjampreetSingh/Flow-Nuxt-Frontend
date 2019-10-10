<template>
  <div>
    <p>Loading...</p>
  </div>
</template>
<script>
export default {
  async mounted() {
    await this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
  }
}
</script>
