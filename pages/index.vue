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
  </div>
</template>

<script>
import Particles from '~/components/Particles'

export default {
  components: {
    Particles
  }
}
</script>

<style>
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
