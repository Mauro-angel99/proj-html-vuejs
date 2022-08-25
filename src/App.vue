<template>
  <div>
    <TheHeader :sideMenu="sideMenu" />

  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
  },
  data() {
    return {
      sideMenu: ['home', 'About Me', 'Testimonials', 'My Blog', 'Meetups', 'Shop', 'Contact Me']
    }
  }
}
</script>

<style lang="scss">
</style>
