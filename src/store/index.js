import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import popularMovies from './modules/popularMovies.js'
import movieDetails from './modules/movieDetails.js'
import genreSelection from './modules/genreSelection.js'

export const store = new Vuex.Store({
	modules: {
		popularMovies,
        movieDetails,
        genreSelection
	},
	strict: process.env.NODE_ENV !== 'production'
})
