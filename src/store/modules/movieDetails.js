import server from '~/server.js'
import  apiKey from '~/store/services/key.js'

export default {
    namespaced: true,
    state: {
        movieDetails: []
    },
    
    getters: {
        details(state){
            return state.movieDetails;
        }
    },
    mutations: {
        loadMovieDetails(state, movie){
            state.movieDetails = movie;
        }
        
    },
    actions: {
        
        loadMovieDetails(store, id){
            return new Promise(function(resolve,reject){
                        server.get(`movie/${id}`,{
                            params: {
                               api_key: `${apiKey}`,    
                               language: 'ru-RU'    
                            }    
                        }).then((response) => {
                        store.commit('loadMovieDetails', response.data);  
                        resolve();
                })   
            })  
         }
        
    }
}