import server from '~/server.js'
import  apiKey from '~/store/services/key.js'

export default {
    namespaced: true,
    state: {
        genres: [],
        genreSelection: [],
        page: 1,
        transition: false
    },
    
    getters: {
        selection(state){
            return state.genreSelection;
        },
        genres(state){
            return state.genres;
        },
        page(state){
            return state.page;
        }
    },
    mutations: {
        
        loadGenres(state, genres){
            state.genres = genres;
        },
        loadMoviesGenre(state,movies){
            if(state.genreSelection.length == 0 || state.transition){
                state.genreSelection = movies;
                state.transition = !state.transition;
            } else movies.results.forEach((item) => {
                state.genreSelection.results.push(item)
            })
        },
        changePage(state){
            state.page++;
        },
        transition(state){
            state.transition = !state.transition;
            state.page = 1;
        }
        
    },
    actions: {
        
        loadGenres(store){
            return new Promise(function(resolve,reject){
                        server.get('genre/movie/list',{
                            params: {
                               api_key: `${apiKey}`,    
                               language: 'ru-RU',    
                            }    
                        }).then((response) => {
                        store.commit('loadGenres', response.data.genres);  
                        resolve();
                })   
            })  
        },
        
        loadMoviesGenre(store, id){
            return new Promise(function(resolve,reject){
                        server.get('discover/movie',{
                            params: {
                               api_key: `${apiKey}`,    
                               language: 'ru-RU',
                               sort_by: 'popularity.desc',
                               include_adult: false,
                               include_video: false,
                               page: `${store.state.page}`,
                               with_original_language: 'ru, en',
                               with_genres: `${id}`    
                            }    
                        }).then((response) => {
                        store.commit('loadMoviesGenre', response.data);  
                        resolve();
                })   
            })  
        },
        changePage(store){
            store.commit('changePage'); 
            },
        transition(store){
            store.commit('transition');
        }

    }
}