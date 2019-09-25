<template>
  <div>
    <section id="particles-js">
      <slot></slot>
    </section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      script: [
        {
          src:
            'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js'
        }
      ]
    }
  },
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
  height: 500px;
  width: 100%;
  position: relative;
  border-bottom: 1px solid #f1f1f1;
}
@media screen and (max-width: 768px) {
  #particles-js {
    height: 350px;
  }
}
</style>
