<template>
  <div>
    <button
      :type="type"
      :class="[colorClass, { 'is-outlined': hover }]"
      :disabled="disabled"
      @mouseenter="mouseover"
      @mouseleave="mouseover"
      class="button is-fullwidth"
    >
      <slot v-if="!loading"></slot>
      <ellipsis-loader v-else color="#fff" />
    </button>
  </div>
</template>
<script>
import EllipsisLoader from '~/components/general/EllipsisLoader'
export default {
  components: {
    EllipsisLoader
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hover: false,
      colorClass: this.color
    }
  },
  watch: {
    hover(newVal, oldVal) {
      if (!newVal) this.colorClass = this.color
      else this.colorClass = ''
    },
    disabled(val) {
      if (val) {
        this.colorClass = this.color
        this.hover = false
      }
    }
  },
  methods: {
    mouseover() {
      this.hover = !this.hover
    }
  }
}
</script>
<style scoped>
button {
  transition: 0.2s ease-in-out;
}
</style>
