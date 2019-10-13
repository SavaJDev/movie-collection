import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Main from '~/pages/Main'
import MovieDetails from '~/pages/MovieDetails'
import Selection from '~/pages/Selection'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/main'    
    },
    {
        name: 'main',
        path: '/main',
        component: Main
    },
    {
		name: 'movie_details',
		path: '/main/:id',
		component: MovieDetails
	},
    {
		name: 'selection',
		path: '/selection/:id',
		component: Selection
	} 
  ]  
    
})
