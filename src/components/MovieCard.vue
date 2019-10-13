<template>
    <div class="movie d-flex flex-column align-items-center">
        <img :src="poster" alt="poster">
        <div class="title">
            <h6>{{ title }}</h6>
        </div>
        <div>
            <p align="justify" class="description">{{ text }}</p>
        </div>
        <router-link :to="{name: 'movie_details', params: {
			    	 id: id
        }}">Подробнее</router-link> 
    </div>
</template>

<script>
    export default {
        name: "MovieCard",
        props: {
            poster: String,
            title: String,
            overview: String,
            id: Number
        },
        data () {
            return {
            }
        },
         computed: {
            text() {
                let str = this.overview.slice(0, 160) + '...'
                
                return str;
            }
        }
    }
</script>

<style scoped>
    img {
        width: 15rem;
        height: 20rem;     
    }
    
    .title {
        margin-top: 1rem;
        height: 2rem;
    }
    
    p.description {
        height: 10rem;
        margin-top: 1.8rem;
        margin-bottom: 2rem;
    }
    
    .movie {
        margin-bottom: 1rem;
        border: .1rem solid silver; 
        height: 40rem;
        padding: .5rem;
    }
    
    
</style>