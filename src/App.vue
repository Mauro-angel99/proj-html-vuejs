<template>
  <div>
    <TheHeader :sideMenu="sideMenu" />
    <BaseMain />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import TheHeader from './components/TheHeader.vue'
import BaseMain from './components/BaseMain.vue'


export default {
  name: 'App',
  components: {
    TheHeader,
    BaseMain,
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
