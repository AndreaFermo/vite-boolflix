import { reactive } from 'vue';

export const store = reactive(
    {
        search: '',
        moviesList: [],
        tvList: [],
        movieGenres: [],
        tvGenres: [],
        genres: [],
        chosenGenre: ''
    });