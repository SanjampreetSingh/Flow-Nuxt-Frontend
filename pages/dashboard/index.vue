<template>
  <div>
    <section class="section section-border-bottom has-background-light">
      <div class="container">
        <div class="level has-text-centered-mobile">
          <div class="level-left">
            <div class="level-iten">
              <h1 class="title is-1 is-black">User</h1>
              <!-- <p class="subtitle has-text-weight-bold is-6">
                Profile
                <span class="has-text-weight-normal">
                  <span class="has-text-grey-light">/</span>
                  <a>Edit</a>
                </span>
              </p> -->
              <p class="subtitle has-text-weight-bold is-6">
                {{ loggedInUser.email }}
              </p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <nuxt-link
                to="/dashboard/application/create"
                class="button is-black"
              >
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
        <h1 class="title primary-text-color is-3">Your Applications</h1>
        <p class="subtitle is-6 primary-text-color fix-height">
          A list of application created by you.
        </p>
        <div class="columns has-text-centered is-multiline">
          <div v-if="!applications.length" class="column is-3">
            <div class="card">
              <nuxt-link
                to="/dashboard/application/create"
                class="has-text-dark"
              >
                <div class="card-image card-img-block">
                  <i class="fa fa-plus fa-5x"></i>
                </div>
              </nuxt-link>
              <div class="card-content">
                <div class="media align-title">
                  <div class="media-content has-text-centered">
                    <nuxt-link
                      to="/dashboard/application/create"
                      class="title is-5"
                    >
                      Create Application
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-for="application in applications"
            v-else
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
import { mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters(['loggedInUser'])
  },
  asyncData(context) {
    if (context.$auth.user.verified) {
      return context.app.$repository.application
        .index()
        .then((response) => {
          return {
            applications: response.data.application
          }
        })
        .catch((e) => {
          // eslint-disable-next-line
          console.log(e)
        })
    }
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
