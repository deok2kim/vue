<template>
  <div class="video-item-detail">
		<h2>{{ video.snippet.title }}</h2>
		<iframe class="video-frame" :src="videoUrl"></iframe> <br>
  </div>
</template>

<script>
export default {
	name: 'VideoItemDetail',
	props: {
		video: Object
	},
	data() {
		return {
			videoUrl: `https://www.youtube.com/embed/${this.video.id.videoId}`
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
	.video-frame {
		width: 75vw;
		height: 50vh;
	}
</style>