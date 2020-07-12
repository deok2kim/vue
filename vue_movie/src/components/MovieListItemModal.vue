<template>
  <div>
		<!-- Modal -->
		<div class="modal fade" :id="'movie-' + movie.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">{{ movie.title }}</h5>
						
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<img :src="movie.backdrop_url" :alt="movie.title">
						<hr>
						{{ movie.user_rating }}
						<p>{{ movie.overview }}</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
	name: 'MovieListItemModal',
	props: {
		movie: Object
	}
}
</script>

<style scoped>
	div > img {
		width: 100%;
	}
</style>