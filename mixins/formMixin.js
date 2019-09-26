export default {
  data() {
    return {
      loader: false,
      disabled: false,
      formStatus: ''
    }
  },
  methods: {
    validate() {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          this.loader = true
          this.disabled = true
          this.submit()
          return
        }
        this.showMsg('Form is not valid! Please check the fields.')
      })
    }
  }
}
