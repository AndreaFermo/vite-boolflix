<template>
  <MyHeader @doSearch="getMovies()" />
  <MyMoviesList />
</template>

<script>
import axios from 'axios';
import { store } from './store.js';
import MyHeader from './components/MyHeader.vue';
import MyMoviesList from './components/MyMoviesList.vue';

export default {
  components: {
    MyHeader,
    MyMoviesList
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getMovies() {
      if (this.store.search.length > 0) {
        this.store.moviesList = [];
        let urlApi = `https://api.themoviedb.org/3/search/movie?api_key=0ef6507b5d63cfd376dbac3c0f9236f2&query=${this.store.search}&language=it`;
        axios.get(urlApi).then(response => {
          this.store.moviesList = response.data.results;

        }

        )
      }

    },

  },

}
</script>



<style lang="scss"></style>
