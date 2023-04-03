<template>
    <h2>Film</h2>
    <ul>
        <MyCard v-for="(movie, index) in store.moviesList" :key="index" :movie="movie" />
    </ul>
</template>
<script>
import { store } from '../store';
import MyCard from './MyCard.vue';
export default {
    name: 'MyMovieList',
    components: {
        MyCard
    },
    data() {
        return {
            store
        }

    }

}
</script>
<style></style>