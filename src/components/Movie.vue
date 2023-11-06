<template>
    <div class="movie">
        <img
        :src="`https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png${movie.poster_path}`"
        :alt="movie_original_title" 
        class="movie-img">
        <div>
            <div class="movie-name">
                {{ movie.original_title }} ({{ movie.relase_date }})
            </div>
            <span class="movie-overview">{{ movie.overview }}</span>
            <div class="movie-buttons">
                <button class="btn movie-buttons-watched">
                    <span v-if="!movie.isWatched">Watched</span>
                    <span v-else>unwatched</span>
                </button>
                <button class="btn movie-buttons-delete">
                    Delete
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    movie: {
        type: Object,
        required: true,
        default: () => {}
    }
})
</script>

<style>
.movie-buttons {
    margin-top: 20px;
}

.movie-buttons .movie-buttons-watched {
    color: #fff;
    background-color: rgb(55, 55, 214);
}

.movie-buttons .movie-buttons-delete {
    color: #fff;
    background-color: rgb(232, 39, 39);
}

.movie {
    display: flex;
    grid-template-columns: 200px 1fr;
    column-gap: 30px;
    margin-bottom: 20px;
    border: 2px solid #efefef;
    padding: 10px;
    border-radius: 10px;
}

.movie-accept {
    margin-right: 1 fpx;
}

.movie-img {
    object-fit: cover;
    width: 200px;
    height: 250px;
}

.movie-name {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
}
</style>