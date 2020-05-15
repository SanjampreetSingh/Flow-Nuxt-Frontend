<template>
  <div id="dark-mode" @click="toggleDarkMode">
    <i class="fa fa-moon"></i>
  </div>
</template>
<script>
export default {
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
        vm.$auth.$storage.setLocalStorage('dark_mode', 1)
      } else {
        el.classList.remove(className)
        vm.darkMode = false
        vm.$auth.$storage.setLocalStorage('dark_mode', 0)
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
  z-index: 1000;
  background: rgb(var(--text-color));
  color: rgb(var(--bg-color));
  transition: 0.5s ease;
}
#dark-mode:hover {
  box-shadow: 3px 4px 6px #484646;
}
</style>
