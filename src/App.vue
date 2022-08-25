<template>
  <div>
    <TheHeader :sideMenu="sideMenu" />
    <BaseMain />
    <TheFooter :links="links" :contacts="contacts" />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import TheHeader from './components/TheHeader.vue'
import BaseMain from './components/BaseMain.vue'
import TheFooter from './components/TheFooter.vue'




export default {
  name: 'App',
  components: {
    TheHeader,
    BaseMain,
    TheFooter,
  },
  data() {
    return {
      sideMenu: ['home', 'About Me', 'Testimonials', 'My Blog', 'Meetups', 'Shop', 'Contact Me'],
      links: [`Latest Books`, 'Upcoming Events', 'Recent Articles', 'Business Enquiries', 'Visit My Foundation'],
      contacts: ['63 E. Studebaker Street Bolingbrook, IL 60440', 'Phone: (800) 000-0000', 'mobile: (800) 000-0000', 'Email: info@your-company.com']
    }
  }
}
</script>

<style lang="scss">
</style>
