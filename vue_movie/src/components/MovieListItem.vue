<template>
  <div>
		<img :src="movie.poster_url" :alt="movie.title">
		<h3>{{ movie.title }}</h3>
		<!-- Button trigger modal -->
		<button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#movie-' + movie.id">
			Launch demo modal
		</button>
		<MovieListItemModal :movie=movie />

  </div>
</template>

<script>
import MovieListItemModal from '@/components/MovieListItemModal.vue'

export default {
	name: 'MovieListItem',
	components: {
		MovieListItemModal
	},
	props: {
		movie: Object
	}
}
</script>

<style>

</style>