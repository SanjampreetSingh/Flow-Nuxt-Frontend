<template>
  <footer id="foot" class="is-clipped has-background-dark">
    <div class="container">
      <div class="columns">
        <div class="column has-text-centered">
          <logo id="foot-logo" />
        </div>
      </div>
      <div class="columns is-mobile is-centered">
        <div class="column is-6">
          <div id="icons-list" class="level is-mobile">
            <div class="level-item">
              <a
                href="https://www.twitter.com/Flow_ArtInt"
                aria-label="twitter"
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <div class="level-item">
              <a
                href="https://www.linkedin.com/company/flow-api"
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
            <div class="level-item">
              <a
                href="https://www.instagram.com/flow_artint/"
                aria-label="instagram"
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
            <div class="level-item">
              <a
                href="https://www.facebook.com/flowml"
                aria-label="facebook"
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column has-text-centered">
          <p id="copyright-content">
            Copyright © {{ new Date().getFullYear() }}
            <span class="has-text-white has-text-weight-bold">Flow</span> All
            rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import Logo from '~/assets/img/logo_nobg_white.svg'
export default {
  components: {
    Logo
  }
}
</script>
<style scoped>
#foot {
  padding-top: 20px;
  padding-bottom: 20px;
}
#foot-logo {
  width: 100px;
  height: auto;
  fill: #000 !important;
}
#foot-logo path {
  fill: #000 !important;
}
#copyright-content {
  /* padding: 25px 0; */
  color: #7b7b7b;
}
#icons-list a {
  color: #fff;
}
#icons-list a:hover {
  color: #fff;
}
#icons-list a i {
  font-size: 20px;
}
</style>
