<template>
  <div>
    <nav-bar />
    <nuxt />
    <!-- <foot /> -->
    <div id="dark-mode" class="has-background-black" @click="toggleDarkMode">
      <i class="fa fa-moon has-text-light"></i>
    </div>
    <copyright-strip />
  </div>
</template>
<script>
import NavBar from '~/components/layout/default/NavBar'
// import Foot from '~/components/layout/default/Foot'
import CopyrightStrip from '~/components/layout/default/CopyrightStrip'
export default {
  middleware: 'guest',
  components: {
    NavBar,
    // Foot,
    CopyrightStrip
  },
  data() {
    return {
      darkMode: false
    }
  },
  methods: {
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body
      const vm = this
      if (addRemoveClass === 'addClass') {
        el.classList.add(className)
        vm.darkMode = true
      } else {
        el.classList.remove(className)
        vm.darkMode = false
      }
    },
    toggleDarkMode() {
      if (!this.darkMode) this.toggleBodyClass('addClass', 'dark-mode')
      else this.toggleBodyClass('removeClass', 'dark-mode')
    }
  }
}
</script>
<style scoped>
#dark-mode {
  position: fixed;
  border-radius: 50%;
  right: 20px;
  bottom: 20px;
  padding: 15px 20px;
}
</style>
