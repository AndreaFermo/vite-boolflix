<template>
    <li>
        <h5>{{ movie.title }}</h5>
        <h5 v-if="movie.original_title">{{ movie.original_title }}</h5>
        <h5 v-else>{{ movie.original_name }}</h5>
        <img :src="getFlag(movie.original_language)" :alt="movie.original_language">
        <h5> {{ movie.vote_average }}</h5>

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

        }

    }



}

</script>
<style lang="scss"></style>