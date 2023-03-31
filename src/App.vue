<template></template>

<script>
import axios from 'axios';
import { store } from './store.js';

export default {
  data() {
    return {
      store
    }
  },
  methods: {
    getMovies() {
      let urlApi = 'https://api.themoviedb.org/3/search/movie?api_key=0ef6507b5d63cfd376dbac3c0f9236f2&query=ritorno+al+futuro&language=it';
      axios.get(urlApi).then(response => {
        this.store.moviesList = response.data;
      }
      )
    }
  },
  created() {
    this.getMovies();
  }

}
</script>



<style lang="scss"></style>
