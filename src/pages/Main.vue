<template>
  <div class="container">
      <div class="row">
          <div class="col-sm-12">
              <h6>Рекомендуем к просмотру</h6>
              <hr size="20">
          </div> 
      </div>  
      <div class="row">
          <div v-for="(movie, i) in popularMovies.results" class="col-sm-3">
                  <MovieCard
                      :key="i" 
                      :poster="url + movie.poster_path" 
                      :title="movie.title" 
                      :overview="movie.overview"
                      :id="movie.id"
                  />
            </div>
      </div> 
     
  </div>
</template>

<script>
    import MovieCard from '~/components/MovieCard';
    import {mapGetters, mapActions} from 'vuex';
    
     export default {
        data() {
            return {
                url: 'https://image.tmdb.org/t/p/w500'
            }
        }, 
         
        components:{
             MovieCard
        },  
        
        methods: {
            ...mapActions({
                 loadPopularMovies: 'popularMovies/loadPopularMovies',
                 changePage: 'popularMovies/changePage'
            }),
            handleScroll(e){
					let el = e.target.documentElement;
					if(((el.scrollHeight - el.scrollTop).toFixed(0) == el.clientHeight)){
                      this.changePage();
                      this.loadPopularMovies(this.page);
					}
                
            }
            
        }, 
         
        computed: {
            ...mapGetters ({
                popularMovies: 'popularMovies/movies',
                page: 'popularMovies/page'
            })
            
         },
         created () {
            window.addEventListener('scroll', this.handleScroll);
         },
         destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
         }
}
</script>

<style>

</style>