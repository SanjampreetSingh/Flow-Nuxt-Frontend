<template>
  <div>
    <particles>
      <div id="overlay">
        <div class="container">
          <h1 id="overlay-heading" class="title primary-text-color">
            Machine Intelligence Platform for
            <br />Development
          </h1>
          <nuxt-link to="/login" class="flow-btn flow-btn-dark">
            Get Started
          </nuxt-link>
          <a
            href="mailto:flow.support@protonmail.com"
            class="flow-btn flow-btn-outlined"
          >
            Contact
          </a>
        </div>
      </div>
    </particles>
    <div class="section section-strip">
      <div class="section-strip-background">
        <img
          :src="require('~/assets/img/ReadyModels/face_detection2.jpg')"
          class="section-strip-background-poster"
          alt="Face Detection"
        />
        <div class="section-strip-background-mask"></div>
      </div>
      <div class="container">
        <div class="section-strip-content">
          <div class="section-heading">
            <span>Detect Faces</span>
            <h1>Face Detection</h1>
          </div>
          <p class="section-content has-text-justified primary-text-color">
            Detection of all the human faces altogether in images is beneficial
            in many use cases. Siey gives you the power of automating such
            process in your workSiey using our cutting-edge machine intelligence
            technology. And it's easy to do so. Get started with automating face
            detection in your images with our right out-of-the-box API in just a
            few lines of code!
          </p>
          <nuxt-link to="/demo">
            Check Demo <i class="fa fa-arrow-right"></i>
          </nuxt-link>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="level">
              <div class="level-left">
                <div class="section-heading">
                  <span>Select Language</span>
                  <h1>Start Coding</h1>
                </div>
              </div>
              <div class="level-right">
                <div class="field">
                  <div class="control has-icons-left">
                    <div class="select is-medium is-dark">
                      <select aria-label="Select Language">
                        <option selected label="Python">Python</option>
                      </select>
                    </div>
                    <div class="icon is-small is-left has-text-dark">
                      <i class="fas fa-code"></i>
                    </div>
                  </div>
                </div>
                <!-- <div
                  class="dropdown"
                  :class="{ 'is-active': toggleLanguageDropdown }"
                > -->
                <!-- <div class="dropdown-trigger">
                    <button
                      class="btn-main"
                      aria-haspopup="true"
                      aria-controls="dropdown-menu"
                      @click="toggleLanguageDropdown = !toggleLanguageDropdown"
                    >
                      <span>Select Language</span>
                      <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div> -->
                <!-- <div id="dropdown-menu" class="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                      <a class="dropdown-item is-active">
                        Python
                      </a>
                    </div>
                  </div> -->
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column">
            <client-only>
              <prism id="code-highlighter" language="python">
                {{ html }}
              </prism>
            </client-only>
          </div>
        </div>
      </div>
    </section>
    <!-- <div class="columns">
      <div class="column is-5 is-offset-1">
        <div class="container">
          <h1 class="section-heading">Face Detection</h1>
          <p class="section-content has-text-justified">
            Detection of all the human faces altogether in images is beneficial
            in many use cases. Siey gives you the power of automating such
            process in your workSiey using our cutting-edge machine intelligence
            technology. And it's easy to do so. Get started with automating face
            detection in your images with our right out-of-the-box API in just a
            few lines of code!
          </p>
          <nuxt-link to="/demo">
            Check Demo <i class="fa fa-arrow-right"></i>
          </nuxt-link>
        </div>
      </div>
      <div class="column">
        <img
          :src="require('~/assets/img/ReadyModels/face_detection.jpg')"
          alt="Face Detection"
          width="100%"
        />
      </div>
    </div> -->
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p class="subtitle note primary-text-color">
              Note that this machine intelligence service platform is in early
              stage. So, currently we provide users with upto 100 API calls on
              sign up. If you would like to use our services with more than 100
              calls please contact us at our email provided below. We would love
              to help you with more calls.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Particles from '~/components/Particles'
import 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-python'

export default {
  layout: 'public',
  components: {
    Particles
  },
  data() {
    return {
      html: `
      # Import dependencies
      from Sieyai import SieyApp, Model

      # Initialize your app with:
      # 1. API key
      # 2. Model to use for prediction
      app = SieyApp(api_key="YOUR_API_KEY")

      # Setup some variables
      input_url = "https://qph.fs.quoracdn.net/main-qimg-53a3aa40f0b577ac69588681fb60d0c3-c"
      model_name = Model.FACE_DETECTION

      # Now, make the prediction
      prediction = app.predict_by_url(input_url, model_name)`,
      toggleLanguageDropdown: false
    }
  }
}
</script>

<style>
.select option {
  margin: 0;
  padding: 12px 0;
  border-top: 1px solid rgb(var(--text-color));
  transition: all 0.15s ease-in;
}

#code-highlighter {
  display: inline-block;
  padding-right: 10em;
  /* padding-top: 3rem; */
  border-radius: 6px;
  width: 100%;
  background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="%23FF5F56" stroke="%23E0443E" strokeWidth=".5" /><circle cx="26" cy="6" r="6" fill="%23FFBD2E" stroke="%23DEA123" strokeWidth=".5" /><circle cx="46" cy="6" r="6" fill="%2327C93F" stroke="%231AAB29" strokeWidth=".5" /></g></svg>');
  background-repeat: no-repeat;
  background-position: 16px 16px;
  box-shadow: 5px 5px 15px 0px rgba(50, 50, 50, 0.75);
}
.tag:not(body) {
  font-size: 16px !important;
}
.flow-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 240px;
  height: 45px;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 20px;
  text-transform: uppercase;
  margin-right: 16px;
  border-radius: 3px;
  margin-top: 16px;
  transition: 0.4s linear;
  border: 1px solid rgb(var(--text-color));
}
.flow-btn-dark {
  background: rgb(var(--text-color));
  color: rgb(var(--bg-color));
}
.flow-btn-dark:hover {
  background: transparent;
  color: rgb(var(--text-color));
}
.flow-btn-outlined {
  color: rgb(var(--text-color));
}
.flow-btn-outlined:hover {
  color: rgb(var(--bg-color));
  background: rgb(var(--text-color));
}
.note {
  font-size: 26px;
  font-weight: 300;
  line-height: 54px;
  text-align: center;
}
.section-strip {
  position: relative;
  margin-top: 50px;
  margin-bottom: 50px;
}
.section-strip-background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
}
.section-strip-background-poster {
  position: absolute;
  width: 100%;
  height: 320px;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
}
.section-strip-background-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(0deg, var(--bg-color) 320px);
}
.section-strip-content {
  position: relative;
  z-index: 2;
  padding-bottom: 300px;
}
.section-strip-content p {
  width: 100%;
}
#overlay {
  position: absolute;
  bottom: 15%;
  width: 100%;
  padding: 20px;
}
#overlay-heading {
  margin-bottom: 0px;
  font-weight: 400;
  font-size: 40px;
  text-align: left;
  line-height: 60px;
}
@media screen and (min-width: 768px) {
  .section-strip-background-mask {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(50%, var(--bg-color))
    );
    background: linear-gradient(90deg, var(--bg-color) 50%);
  }
  .section-strip-background-poster {
    height: 100%;
    width: 50%;
    top: 0;
    left: 50%;
  }
  .section-strip-content {
    padding-bottom: 0;
  }
  .section-strip-content p {
    width: 45%;
  }
}
@media screen and (max-width: 768px) {
  .note {
    font-size: 20px;
    line-height: 60px;
  }
  #overlay {
    bottom: 0%;
  }
  #overlay-heading {
    font-size: 26px;
    line-height: 60px;
  }
}
</style>
