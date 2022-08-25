import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faAmazon } from '@fortawesome/free-brands-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faCartShopping)
library.add(faArrowRight)
library.add(faArrowLeft)
library.add(faFolder)
library.add(faAmazon)
library.add(faApple)
library.add(faAngleRight)


Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

