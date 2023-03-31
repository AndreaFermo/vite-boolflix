<template>
    <ul v-for="(element, index) in store.moviesList" :key="index">
        <li>{{ element.title }}</li>
        <li>{{ element.original_title }}</li>
        <li>{{ element.original_language }}</li>
        <li>{{ element.vote_average }}</li>
    </ul>
</template>
<script>
import { store } from '../store';
export default {
    name: 'MyMovieList',
    data() {
        return {
            store
        }
    }


}
</script>
<style></style>