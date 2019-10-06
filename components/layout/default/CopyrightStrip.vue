<template>
  <footer class="has-background-dark">
    <div class="container">
      <p id="copyright-content" class="has-text-centered has-text-light">
        Copyright © {{ new Date().getFullYear() }}
        <span class="has-text-info">Flow</span> All rights reserved.
      </p>
    </div>
  </footer>
</template>
<style scoped>
#copyright-content {
  padding: 25px 0;
}
</style>
