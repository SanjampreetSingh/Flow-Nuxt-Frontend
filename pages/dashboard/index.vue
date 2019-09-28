<template>
  <div>
    <section class="section section-border-bottom has-background-light">
      <div class="container">
        <div class="level has-text-centered-mobile">
          <div class="level-left">
            <div class="level-iten">
              <h1 class="title is-1 is-black">User</h1>
              <p class="subtitle has-text-weight-bold is-6">
                Profile
                <span class="has-text-weight-normal">
                  <span class="has-text-grey-light">/</span>
                  <a>Edit</a>
                </span>
              </p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <nuxt-link to="application/create" append class="button is-black">
                <span class="icon">
                  <i class="fa fa-plus"></i>
                </span>
                <span>New Application</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <section class="section">
        <div class="columns has-text-centered is-multiline">
          <div
            v-for="application in applications"
            :key="application.id"
            class="column is-3"
          >
            <nuxt-link
              :to="'/dashboard/application/' + application.reference_url"
            >
              <div class="card">
                <div class="card-image card-img-block">
                  <avatar :username="application.name" :size="100"></avatar>
                </div>
                <div class="card-content">
                  <div class="media align-title">
                    <!-- <div class="media-left">
                      <figure class="image is-48x48">
                        <avatar :username="application.name"></avatar>
                      </figure>
                    </div> -->
                    <div class="media-content">
                      <p class="title is-5 has-text-centered">
                        {{ application.name | capitalize }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Avatar from 'vue-avatar'
export default {
  middleware: 'auth',
  layout: 'dashboard',
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  components: {
    Avatar
  },
  data() {
    return {
      applications: []
    }
  },
  asyncData(context) {
    return context.app.$repository.application
      .index()
      .then((response) => {
        return {
          applications: response.data.application
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
</script>
<style scoped>
a:hover {
  text-decoration: none;
}
.align-title {
  align-items: center;
}
.active-list {
  list-style-type: none;
  margin-top: 10px;
}
.active-list li {
  position: relative;
}
.active-list li::before {
  font-family: FontAwesome;
  position: absolute;
  top: 0;
  left: -25px;
  content: '\f00c';
  color: #d6d6d6;
}
/* .card-content {
  height: 250px;
} */
#module-image {
  margin-bottom: 15px;
}
.card-img-block {
  padding: 50px;
  background: #f5f5f5;
}
.vue-avatar--wrapper {
  margin: 0 auto;
}
</style>
