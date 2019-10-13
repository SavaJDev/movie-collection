<template>
  <div class="container">
      <div class="row">
          <div class="col-sm-12">
              <h6>Вы выбрали жанр: {{ genreName }}</h6>
              <hr size="20">
          </div> 
      </div>  
      <div class="row">
          <div v-for="(movie, i) in selection.results" class="col-sm-3">
                  <MovieCard
                      :key="i" 
                      :poster="url + movie.poster_path" 
                      :title="movie.title" 
                      :overview="movie.overview"
                      :id="movie.id"
                  />
            </div>
            <hr>
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
                 loadMoviesGenre: 'genreSelection/loadMoviesGenre',
                 changePage: 'genreSelection/changePage',
                 transition: 'genreSelection/transition'
            }),
            handleScroll(e){
					let el = e.target.documentElement;
					if(((el.scrollHeight - el.scrollTop).toFixed(0) == el.clientHeight)){
                      this.changePage();
                      this.loadMoviesGenre(this.id);
					}
                
            }
        }, 
         
        computed: {
            ...mapGetters ({
                genres: 'genreSelection/genres',
                selection: 'genreSelection/selection'
            }),
            id(){
				return this.$route.params.id;
			},
            genreName(){
                return this.genres.find(item => item.id == this.id).name
            }
        },
        created(){
            this.loadMoviesGenre(this.id);
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
         },    
        beforeRouteUpdate (to, from, next) {
             this.loadMoviesGenre(to.params.id) 
             this.transition()
              next()
       }
}
</script>

<style>

</style>