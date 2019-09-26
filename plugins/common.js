import Vue from 'vue'
import { ToastProgrammatic as Toast } from 'buefy'

Vue.mixin({
  methods: {
    showMsg(msg, colorClass = 'is-danger') {
      Toast.open({
        duration: 2000,
        message: msg,
        position: 'is-bottom',
        type: colorClass
      })
    }
  }
})
