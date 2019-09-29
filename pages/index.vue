<template>
  <div>
    <particles>
      <div id="overlay">
        <div class="container">
          <h1 id="overlay-heading" class="title is-1 has-text-weight-light">
            Machine Intelligence Platform for
            <br />Development and Cutting Edge Research
          </h1>
        </div>
      </div>
    </particles>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-5">
            <h1 id="title-margin" class="title is-2 has-text-weight-light">
              Face Detection
            </h1>
            <p class="subtitle is-5 has-text-dark has-text-justified">
              Detection of all the human faces altogether in images is
              beneficial in many use cases. Flow gives you the power of
              automating such process in your workflow using our cutting-edge
              machine intelligence technology. And it's easy to do so. Get
              started with automating face detection in your images with our
              right out-of-the-box API in just a few lines of code!
            </p>
            <nuxt-link to="/demo" class="button is-dark is-medium">
              Demo
            </nuxt-link>
          </div>
          <div class="column has-text-centered">
            <img
              :src="require('~/assets/img/ReadyModels/face_detection.jpg')"
              alt="Face Detection"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <p class="subtitle is-4 has-text-centered is-italic has-text-dark">
          Note that this machine intelligence service platform is in early
          stage. So, currently we provide users with upto 100 API calls on sign
          up. If you would like to use our services with more than 100 calls
          please contact us at our email provided below.We would love to help
          you with more calls.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import Particles from '~/components/Particles'

export default {
  layout: 'public',
  components: {
    Particles
  }
}
</script>

<style>
#title-margin {
  margin-bottom: 45px;
}
#overlay {
  position: absolute;
  bottom: 3%;
  width: 100%;
  padding: 20px;
}
#overlay-heading {
  border-left: 2px solid #000;
  padding-left: 20px;
  margin-bottom: 0;
}
@media screen and (max-width: 768px) {
  #overlay-heading {
    font-size: 32px;
  }
}
</style>
