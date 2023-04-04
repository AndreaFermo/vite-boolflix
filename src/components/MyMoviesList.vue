<template>
    <div class="container">
        <h2 v-if="store.moviesList.length > 0">Film</h2>
        <div class="card-container">
            <div v-for="(movie, index) in store.moviesList" :key="index" class="card">
                <MyCard :movie="movie" />
            </div>
        </div>
        <h2 v-if="store.tvList.length > 0">Serie Tv</h2>
        <div class="card-container">
            <div v-for="(movie, index) in store.tvList" :key="index" class="card">
                <MyCard :movie="movie" />
            </div>
        </div>
    </div>
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

<style scoped lang="scss">
.container {
    max-width: 1100px;
    height: calc(100vh - 100px);
    margin: 30px auto 0;

    .card-container {
        display: flex;
        flex-wrap: wrap;

        .card {
            margin: 10px;
            max-width: calc((100% / 4) - 20px);
        }
    }


    h2 {
        font-size: 40px;
        text-align: center;
    }
}
</style>