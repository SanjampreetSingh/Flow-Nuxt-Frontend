<template>
  <section class="section section-border-bottom">
    <div class="level">
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
  </section>
</template>
<script>
export default {
  layout: 'dashboard'
}
</script>
