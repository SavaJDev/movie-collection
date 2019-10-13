<template>
     <div class="container">
         <div v-if="flag" class="row">
             <div class="col-sm-5">
                 <img :src="url + movieDetails.poster_path" alt="poster">
             </div>
             <div class="col-sm-7">
                 <h2>{{ movieDetails.title }}</h2>
                 
                 <div class="d-flex flex-row">
                        <div v-for="(md, i) in movieDetails.genres">
                             <p>{{ md.name }},</p> 
                        </div>
                        <p>{{ releaseDate }}</p>
                 </div>
                 <p>{{ movieDetails.overview }}</p>
                 <div class="logo_play">
                    <a href="#">
                        <img src="../assets/img_play.png" alt="play">
                    </a>
                 </div>
             </div>
         </div>
         <div v-else class="row">
             <div class="col-sm-12">
                 Loading...
             </div>
         </div>
     </div>
</template>

<script>
    
    import {mapGetters, mapActions} from 'vuex';
    
     export default {
        data() {
            return {
                url: 'https://image.tmdb.org/t/p/w500',
                date: '',
                flag: false
            }
        }, 
         
        methods: {
            ...mapActions({
                 loadMovieDetails: 'movieDetails/loadMovieDetails',
            })
        }, 
         
        computed: {
            id(){
				return this.$route.params.id;
			},
            releaseDate() {
                return this.date = this.movieDetails.release_date.slice(0,4)
            },
            change(){
                setTimeout(() => {this.flag = !this.flag}, 1000);
                return this.flag
            },
            ...mapGetters({
                movieDetails: 'movieDetails/details'
            })
        },
        
        created(){
                this.loadMovieDetails(this.id)
                this.change
        }
         
}
</script>

<style scoped>
    
    img {
        width: 25rem;
        height: 30rem;
    }
    
    .logo_play img {
        margin-top: 1rem;
        width: 10rem;
        height: 10rem;
    }
    
    .logo_play {
        text-align: center;
    }
</style>