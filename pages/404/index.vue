<template>
  <div>
    <section id="error" class="section">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column has-text-centered">
            <svg
              id="Layer_1"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="300px"
              height="500.4px"
              viewBox="0 0 230 230"
              enable-background="new 0 0 230 230"
              xml:space="preserve"
            >
              <path
                id="logo"
                d="M60.73,196.915c47.514,56.69,57.457-64.911,59.617-80.767c0.143,0,39.602,18.713,43.316-5.771 c-0.143,0-0.286,0-0.43,0c-6.91,13.816-41.459,0.444-41.604,0.444c0.069-11.205,10.496-93.908,42.462-82.987 c2.099,0.716,5.289,3.106,5.574,3.106c-39.308-46.064-53.161,48.91-57.043,76.33c-42.405-20.235-49.912-4.497-49.434,0.992 c-0.177,2.017,4.743-15.166,48.576,3.89C101.769,241.899,61.016,196.915,60.73,196.915z"
              />
            </svg>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column has-text-centered">
            <div class="section-strip-content">
              <div class="section-heading">
                <span>Something not working.</span>
                <h1>404</h1>
              </div>
              <nuxt-link to="/">
                <i class="fa fa-arrow-left"></i> Go to Home Page
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'errorPageLayout'
}
</script>

<style scoped>
.section-heading {
  width: 100%;
}
.section-heading::after {
  left: 49%;
  width: 2%;
}
#error {
  height: 100vh;
}

#logo {
  animation: float 1.8s infinite ease-in-out alternate;
}

svg {
  fill: rgba(var(--text-color), 1);
}

@keyframes float {
  100% {
    transform: translateY(20px);
  }
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
  padding-bottom: 0 !important;
}
.section-strip-content p {
  width: 100%;
}
</style>
