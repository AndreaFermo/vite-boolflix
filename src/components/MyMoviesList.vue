<template>
    <div class="container">
        <div class="select-container">
            <select name="filterGeenre" id="filterGeenre" v-model="store.chosenGenre">
                <option value="">Tutti</option>
                <option v-for="genre in store.genres" :value="genre.id">{{ genre.name }}</option>
            </select>
        </div>

        <section>
            <h2 v-if="store.moviesList.length > 0">Film</h2>
            <div class="card-container">
                <div v-for="(movie, index) in store.moviesList" :key="index" class="card"
                    v-show="movie.genre_ids.includes(store.chosenGenre) || store.chosenGenre == ''">
                    <MyCard :movie="movie" :genresList="store.genres" />
                </div>
            </div>
        </section>
        <section>
            <h2 v-if="store.tvList.length > 0">Serie Tv</h2>
            <div class="card-container">
                <div v-for="(movie, index) in store.tvList" :key="index" class="card"
                    v-show="movie.genre_ids.includes(store.chosenGenre) || store.chosenGenre == ''">
                    <MyCard :movie="movie" :genresList="store.genres" />
                </div>
            </div>
        </section>
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
    margin: 30px auto 0px;
    padding-bottom: 30px;

    .select-container {
        display: flex;
        justify-content: center;

        select {
            padding: 10px;
            font-size: 20px;
            text-align: center;
            border-radius: 5px;

            option {
                background-color: white;

            }

            &:hover {
                background-color: rgba(7, 109, 226, 0.672);
            }
        }
    }



    .card-container {
        display: flex;
        flex-wrap: wrap;

        .card {
            margin: 10px;
            max-width: calc((100% / 4) - 20px);
        }
    }

    h2 {
        font-size: 50px;
        text-align: center;
        margin: 10px 0px;
        color: red;
    }
}
</style>