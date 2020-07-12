<template>
  <div class="video-item-detail">
		<h2>{{ video.snippet.title }}</h2>
		<div class="embed-responsive embed-responsive-16by9">
			<iframe class="embed-responsive-item" :src="videoUrl" allowfullscreen></iframe>
		</div>
  </div>
</template>

<script>
export default {
	name: 'VideoItemDetail',
	props: {
		video: Object
	},
	computed: {
		videoUrl() {
			return `https://www.youtube.com/embed/${this.video.id.videoId}`
		}
	}
}
</script>

<style scoped>
	/* div.video-item-detail {
		background-color: teal;
		border: 2px solid tomato;
		margin: 2px;
		padding: 2px;
	} */
	/* .video-frame {
		width: 75vw;
		height: 50vh;
	} */
</style>