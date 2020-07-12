<template>
  <div class="about">
    <h1>This is an Movie page</h1>
    <button @click="getMovies"> get moives </button>
    <MovieList :movies=movies />
  </div>
</template>

<script>
import axios from 'axios'
import MovieList from '@/components/MovieList.vue'

const MOVIE_URL = 'http://www.json-generator.com/api/json/get/ceNyuXZmwi?indent=2'
export default {
  name: 'MovieView',
  components: {
    MovieList,
  },
  data() {
    return {
      movies: [],
    }
  },
  methods: {
    getMovies() {
      axios.get(MOVIE_URL)
        .then((res) => {
          console.log(res)
          this.movies = res.data
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>