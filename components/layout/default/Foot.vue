<template>
  <footer id="footer" class="section has-background-light">
    <div class="container">
      <div class="columns">
        <div class="column has-text-centered">
          <!-- <logo id="foot_logo" /> -->
          <h1>Siey AI</h1>
        </div>
        <div class="column has-text-centered">
          <h3 class="title is-4">Find Us At</h3>
          <ul id="social">
            <li>
              <a
                href="https://www.twitter.com/Siey_ArtInt"
                aria-label="twitter"
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                <i class="fab fa-twitter"></i>
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/Siey-api"
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                <i class="fab fa-linkedin"></i>
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/Siey_artint/"
                aria-label="instagram"
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                <i class="fab fa-instagram"></i>
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Sieyml"
                aria-label="facebook"
                target="_blank"
                rel="noreferrer nofollow noopener"
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
            href="mailto:Siey.support@protonmail.com"
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
#footer {
  background: url('../../../static/img/footer.jpg') no-repeat center center;
  background-size: cover;
}
</style>
