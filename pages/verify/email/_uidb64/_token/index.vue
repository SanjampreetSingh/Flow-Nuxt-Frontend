<template>
  <div>
    <h1>helo</h1>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$route.params.uidb64)
    console.log(this.$route.params.token)
  }
}
</script>
