<template>
  <footer class="has-background-light">
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column has-text-centered">
            <logo id="foot_logo" />
          </div>
          <div class="column has-text-centered">
            <h3 class="title is-4">Find Us At</h3>
            <ul id="social">
              <li>
                <a
                  href="https://www.twitter.com/Flow_ArtInt"
                  aria-label="twitter"
                  target="_blank"
                  rel="noopener"
                >
                  <i class="fab fa-twitter"></i>
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/flow-api"
                  aria-label="linkedin"
                  target="_blank"
                  rel="noopener"
                >
                  <i class="fab fa-linkedin"></i>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/flow_artint/"
                  aria-label="instagram"
                  target="_blank"
                  rel="noopener"
                >
                  <i class="fab fa-instagram"></i>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/flowml"
                  aria-label="facebook"
                  target="_blank"
                  rel="noopener"
                >
                  <i class="fab fa-facebook"></i>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div class="column has-text-centered">
            <h3 class="title is-4">Contact Info</h3>
            <a
              href="mailto:flow.support@protonmail.com"
              id="contact-btn"
              class="btn-main"
              aria-label="contact"
            >
              <i class="fa fa-envelope"></i>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import Logo from '~/assets/img/logo_nobg.svg'
export default {
  components: {
    Logo
  }
}
</script>
<style scoped>
#social li {
  padding-top: 10px;
  padding-bottom: 20px;
}
#social li a {
  color: #000;
}
#social li a:hover {
  color: #0070f3;
}
i {
  margin-right: 10px;
}
#contact-btn {
  margin-top: 10px;
}
#foot_logo path {
  fill: #000;
}
</style>
