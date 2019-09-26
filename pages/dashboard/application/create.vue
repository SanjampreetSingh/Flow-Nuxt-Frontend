<template>
  <div>
    <section-header title="Create New Application" />
    <div class="section columns">
      <div class="column is-3">
        <p>App Details</p>
      </div>
      <div class="column">
        <form @submit.prevent="validate">
          <client-only>
            <b-field
              label="Application Name"
              :type="{ 'is-danger': errors.has('name') }"
              :message="errors.first('name')"
            >
              <input
                id="name"
                v-model="application.name"
                v-validate="{ required: true, min: 3, max: 50 }"
                type="text"
                name="name"
                class="input"
                placeholder="Application Name"
                aria-placeholder="Application Name"
              />
            </b-field>
          </client-only>
          <div class="columns is-vcentered">
            <div class="column is-8">
              <input
                id="slug"
                v-model="slug"
                type="text"
                name="slug"
                class="input"
                placeholder="Application Slug"
                aria-placeholder="Application Slug"
                disabled
              />
            </div>
            <div class="column">
              <btn type="submit" color="is-info">
                <span>Create</span>
              </btn>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import SectionHeader from '~/components/layout/dashboard/SectionHeader'
import Btn from '~/components/general/Button'
export default {
  middleware: 'auth',
  layout: 'dashboard',
  components: {
    SectionHeader,
    Btn
  },
  data() {
    return {
      application: {
        name: ''
      }
    }
  },
  computed: {
    slug() {
      const slug = this.sanitizeTitle(this.application.name)
      return slug
    },
    ...mapGetters(['loggedInUser'])
  },
  methods: {
    sanitizeTitle(title) {
      let slug = ''
      // Change to lower case
      const titleLower = title.toLowerCase()
      // Letter "e"
      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e')
      // Letter "a"
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a')
      // Letter "o"
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o')
      // Letter "u"
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u')
      // Letter "d"
      slug = slug.replace(/đ/gi, 'd')
      // Trim the last whitespace
      slug = slug.replace(/\s*$/g, '')
      // Change whitespace to "-"
      slug = slug.replace(/\s+/g, '-')

      return slug
    },
    validate() {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          this.submit()
          return
        }
        this.showMsg('Form is not valid! Please check the fields.')
      })
    },
    async submit() {
      const vm = this
      const response = await this.$repositories.application.create({
        user: vm.loggedInUser.id,
        name: vm.application.name,
        reference_url: vm.loggedInUser.id + '-' + vm.slug
      })
      console.log(response)
    }
  }
}
</script>
