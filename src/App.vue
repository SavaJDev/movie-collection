<template> 
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1>MOVIE collection</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <hr>
                <div class="row align-items-center">
                        <div class="col-sm-3">
                            <h6>Выберете категорию:</h6>
                        </div>
                        <div class="col-sm-2">
                           <b-dropdown id="dropdown-aria" text="Фильмы" variant="outline-primary" toggle-class="text- decoration-none" class="m-2" no-caret>
                              <div class="genres">
                                  <b-dropdown-item v-for="(genre, i) in genres" href="#" :to="{name: 'selection', params: {
			    	              id: genre.id}}">{{ genre.name }}</b-dropdown-item> 
                                  <b-dropdown-item href="#" :to="{name: 'main'}">рекомендуемые</b-dropdown-item>
                               </div>
                            </b-dropdown>
                        </div>
                        <div class="col-sm-2">
                           <b-dropdown id="dropdown-aria" text="TV-каналы" variant="outline-primary" toggle-class="text- decoration-none" class="m-2" no-caret>
                                  <b-dropdown-item  href="#" >TV-каналы</b-dropdown-item> 
                               
                            </b-dropdown>
                        </div>
                    <div class="col-sm-5"></div>
                </div>
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <router-view></router-view>
            </div>
        </div>
    </div>  
</template>

<script>
    import {mapGetters,mapActions} from 'vuex';

    export default {
        data() {
            return {

            }
        },

        methods: {
             
        },

        computed: {
             ...mapGetters ({
                genres: 'genreSelection/genres'
            })
        }
    }

</script>

<style scoped>
    .genres {
        column-count: 2;
        column-rule: 1px solid silver;
    }
</style>
