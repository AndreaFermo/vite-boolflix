<template>
    <li>
        <h5>{{ movie.title }}</h5>
        <h5>{{ movie.original_title }}</h5>
        <img :src="getFlag(movie.original_language)" alt="">
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