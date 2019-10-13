import server from '~/server.js'
import  apiKey from '~/store/services/key.js'

export default {
    namespaced: true,
    state: {
        popularMovies: [],
        page: 1
    },
    
    getters: {
        movies(state){
            return state.popularMovies;
        },
        page(state){
            return state.page;
        }
    },
    mutations: {
        
        loadPopularMovies(state, movies){
            if(state.popularMovies.length == 0){
                state.popularMovies = movies;
            } else movies.results.forEach((item) => {
                state.popularMovies.results.push(item)
            })
            
        },
        changePage(state){
            state.page++;
        }
        
    },
    actions: {
        
        loadPopularMovies(store,page){
            return new Promise(function(resolve,reject){
                        server.get('discover/movie',{
                            params: {
                               api_key: `${apiKey}`,    
                               language: 'ru-RU',
                               sort_by: 'popularity.desc',
                               include_adult: false,
                               include_video: false,
                               page: `${page}`,
                               with_original_language: 'ru, en'    
                            }    
                        }).then((response) => {
                        store.commit('loadPopularMovies', response.data);    
                        resolve();
                })   
            })  
         },
        
            changePage(store){
                            store.commit('changePage');   
            }
            
        }
        
    }
