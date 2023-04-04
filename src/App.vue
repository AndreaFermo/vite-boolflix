<template>
  <MyHeader @doSearch="getMovies()" />
  <main>
    <MyMoviesList />
  </main>
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
        this.store.tvList = [];
        let urlMoviesApi = `https://api.themoviedb.org/3/search/movie?api_key=0ef6507b5d63cfd376dbac3c0f9236f2&query=${this.store.search}&language=it`;
        let urlTvApi = `https://api.themoviedb.org/3/search/tv?api_key=0ef6507b5d63cfd376dbac3c0f9236f2&query=${this.store.search}&language=it`;
        axios.get(urlMoviesApi).then(response => {
          this.store.moviesList = response.data.results;
        });
        axios.get(urlTvApi).then(response => {
          this.store.tvList = response.data.results;
        });
      }

    },
    getGenre() {
      let movieGenreApi = 'https://api.themoviedb.org/3/genre/movie/list?api_key=0ef6507b5d63cfd376dbac3c0f9236f2&language=it-IT';
      let tvGenreApi = 'https://api.themoviedb.org/3/genre/tv/list?api_key=0ef6507b5d63cfd376dbac3c0f9236f2&language=it-IT';
      axios.get(movieGenreApi).then(response => {
        this.store.movieGenres = response.data.genres;
      });
      axios.get(tvGenreApi).then(response => {
        let support = [];
        this.store.tvGenres = response.data.genres;
        this.store.genres = [...this.store.movieGenres];
        this.store.genres.forEach(element => {
          support.push(element.id);
        });
        this.store.tvGenres.forEach(element => {
          if (!support.includes(element.id)) {
            this.store.genres.push(element);
          }
        });
      });
    },
  },
  mounted() {
    this.getGenre();
  },
}
</script>



<style lang="scss">
@use './styles/general.scss' as *;

main {
  height: clac(100vh- 100px);
}
</style>
