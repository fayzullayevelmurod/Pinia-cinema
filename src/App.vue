<template>
  <main>
    <header class="header">
      <img class="header-logo" src="../public/logo.png" alt="">
      <h2>My Favorite Movies</h2>
    </header>

    <div class="tabs">
      <button :class="['btn', {btn_green: movieStore.activeTab === 1}]"
      @click="setTab(1)"
      >Favorite</button>
      <button :class="['btn', {btn_green: movieStore.activeTab === 2}]"
      @click="setTab(2)"
      >Search</button>
    </div>

    <div class="movies" v-if="movieStore.activeTab === 1">
      <div>
        <h3>Watched Movies (count: {{ movieStore.watchedMovies.length }})</h3>
        <Movie v-for="movie of movieStore.watchedMovies"
        :key="movie.id"
        :movie="movie"/>
      </div>
      <div>
        <h3>All Movies (count: {{ movieStore.movies.length }})</h3>
        <Movie v-for="movie of movieStore.movies"
        :key="movie.id"
        :movie="movie"/>
      </div>
    </div>
    <div class="search" v-else></div>
  </main>
</template>

<script setup>
import Movie from './components/Movie.vue'
import { useMovieStore } from "./stores/movieStore";

const setTab = (id) => {
  movieStore.setActiveTab(id)
}
const movieStore = useMovieStore();
</script>

<style lang="css">
main {
  max-width: 768px;
  padding: 0 10px;
  margin: 0 auto;
}

.tabs {
  display: flex;
  justify-content: center;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.header-logo {
  max-width: 50px;
  margin-right: 10px;
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #efefef;
}
.btn:hover {
  opacity: 0.7;
}

.btn_green {
  background-color: green;
}

.movies h3 {
  margin-bottom: 20px;
}
</style>
