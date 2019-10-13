import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router'
import {store} from './store'

import { BDropdown } from 'bootstrap-vue'
Vue.component('b-dropdown', BDropdown)

import { BDropdownItem } from 'bootstrap-vue'
Vue.component('b-dropdown-item', BDropdownItem)

store.dispatch('popularMovies/loadPopularMovies')
store.dispatch('genreSelection/loadGenres')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'