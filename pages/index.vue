<template>
  <div>
    <particles>
      <div id="overlay">
        <div class="container">
          <h1 id="overlay-heading" class="title">
            Machine Intelligence Platform for
            <br />Development and Cutting Edge Research
          </h1>
        </div>
      </div>
    </particles>
    <section class="section is-medium">
      <div class="container main-wrapper">
        <div class="columns">
          <div class="column is-5">
            <h1 id="title-margin" class="title">
              Face Detection
            </h1>
            <p class="subtitle has-text-justified">
              Detection of all the human faces altogether in images is
              beneficial in many use cases. Flow gives you the power of
              automating such process in your workflow using our cutting-edge
              machine intelligence technology. And it's easy to do so. Get
              started with automating face detection in your images with our
              right out-of-the-box API in just a few lines of code!
            </p>
            <nuxt-link to="/demo" class="button is-medium btn-main">
              Demo
            </nuxt-link>
          </div>
          <div class="column has-text-centered">
            <img
              :src="require('~/assets/img/ReadyModels/face_detection.jpg')"
              alt="Face Detection"
              width="65%"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <p class="subtitle note">
          Note that this machine intelligence service platform is in early
          stage. So, currently we provide users with upto 100 API calls on sign
          up. If you would like to use our services with more than 100 calls
          please contact us at our email provided below. We would love to help
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
.note {
  font-size: 26px;
  font-weight: 300;
  line-height: 54px;
  text-align: center;
}
#title-margin {
  margin-bottom: 25px;
}
#overlay {
  position: absolute;
  bottom: 35%;
  width: 100%;
  padding: 20px;
}
#overlay-heading {
  margin-bottom: 0;
  font-weight: 400;
  font-size: 52px;
  text-align: center;
  line-height: 70px;
}
@media screen and (max-width: 768px) {
  .note {
    font-size: 20px;
    line-height: 60px;
  }
  #overlay {
    bottom: 5%;
  }
  #overlay-heading {
    font-size: 44px;
    line-height: 60px;
  }
}
</style>
