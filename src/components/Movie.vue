<template>
    <div class="movie">
        <img
        :src="`https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png${movie.poster_path}`"
        :alt="movie_original_title" 
        class="movie-img">
        <div>
            <div class="movie-name">
                {{ movie.orginal_title }} ({{ movie.release_date }})
            </div>
            <span class="movie-overview">{{ movie.overview }}</span>
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
    max-width: 200px;
}
</style>