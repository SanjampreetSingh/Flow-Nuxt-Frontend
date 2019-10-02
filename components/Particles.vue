<template>
  <div>
    <section id="particles-js">
      <slot></slot>
    </section>
  </div>
</template>
<script>
if (process.browser) {
  require('particles.js')
}
export default {
  mounted() {
    this.initParticles()
  },
  methods: {
    initParticles() {
      window.particlesJS.load('particles-js', 'particlesjs.json')
    }
  }
}
</script>
<style scoped>
#particles-js {
  height: 100vh;
  width: 100%;
  position: relative;
  border-bottom: 1px solid #f9f8f8;
}
/* @media screen and (max-width: 768px) {
  #particles-js {
    height: 350px;
  }
} */
</style>
