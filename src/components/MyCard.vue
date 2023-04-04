<template>
    <div class="flip-card-container">
        <div class="card-coontainer">
            <div class="poster-container">
                <img v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`"
                    :alt="`poster ${movie.title}`" class="poster">
                <img v-else src="https://www.prolococisanobg.it/wp-content/uploads/2017/10/Non-disponibile-_04.jpg"
                    alt="poster not available" class="poster">
            </div>
            <div class="info-container">
                <p><span class="bold">Titolo:</span> {{ movie.title ? movie.title : movie.name }}</p>
                <p><span class="bold">Titolo Originale:</span> {{ movie.original_title ? movie.original_title :
                    movie.original_name }}
                </p>

                <img v-if="languageWhiteList.includes(movie.original_language)" :src="getFlag(movie.original_language)"
                    :alt="movie.original_language" class="flag">
                <p v-else>{{ movie.original_language }}</p>
                <p>
                    <span class="bold"><span>Voto:</span> </span>
                    <i v-for="(star, index) in createStarsRate(movie.vote_average)" class="fa-solid fa-star"
                        :key="index"></i>
                    <i v-for="(star, index) in 5 - createStarsRate(movie.vote_average)" class="fa-regular fa-star"
                        :key="index"></i>
                </p>
                <p class="overvew"><span class="bold">Overvew:</span> {{ movie.overview }} </p>
            </div>
        </div>
    </div>
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
                return `https://flagcdn.com/32x24/${flag}.png`
            }
        },
        createStarsRate(n) {
            return Math.ceil(n / 2);

        }
    }
}


</script>
<style lang="scss">
.poster-container {
    width: 100%;
    height: 400px;
    overflow: hidden;
    display: flex;
    justify-content: center;

    .poster {
        height: 100%;
    }
}

.info-container {
    width: 100%;
    height: 400px;
    overflow-y: scroll;
    background-color: black;
    color: white;
    padding: 10px;

    .flag {
        display: block;
    }

    i {
        color: yellow;
        margin: 0px 3px;
    }

    p {
        padding: 10px 0px;
    }

    .bold {
        font-weight: bold;
    }

}

//flip card

.card-coontainer {
    position: relative;
    width: 250px;
    height: 400px;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card-container:hover .card-coontainer {
    transform: rotateY(180deg);
}

.poster-container,
.info-container {
    position: absolute;
    backface-visibility: hidden;
}

.info-container {
    transform: rotateY(180deg);
}
</style>