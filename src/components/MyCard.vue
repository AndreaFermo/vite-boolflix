<template>
    <li>
        <img v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`"
            :alt="`poster ${movie.title}`">
        <img v-else src="https://www.prolococisanobg.it/wp-content/uploads/2017/10/Non-disponibile-_04.jpg"
            :alt="`poster ${movie.title}`">
        <h5>{{ movie.title }}</h5>
        <h5 v-if="movie.original_title">{{ movie.original_title }}</h5>
        <h5 v-else>{{ movie.original_name }}</h5>
        <img v-if="languageWhiteList.includes(movie.original_language)" :src="getFlag(movie.original_language)"
            :alt="movie.original_language">
        <h5 v-else>{{ movie.original_language }}</h5>
        <i v-for="(star, index) in createStarsRate(movie.vote_average)" class="fa-solid fa-star" :key="index"></i>
        <i v-for="(star, index) in 5 - createStarsRate(movie.vote_average)" class="fa-regular fa-star" :key="index"></i>


    </li>
</template>
<script>
export default {
    name: 'MyCard',
    props: {
        movie: Object
    },
    data() {
        return {
            languageWhiteList: ['it', 'fr', 'de', 'en']
        }
    },
    methods: {
        getFlag(country) {
            if (country != null) {
                let flag = country.toLowerCase();
                if (flag == 'en') {
                    flag = 'gb'
                }
                return `https://flagcdn.com/16x12/${flag}.png`
            }
        },
        createStarsRate(n) {
            return Math.ceil(n / 2);

        }
    }
}


</script>
<style lang="scss"></style>