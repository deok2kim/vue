<template>
  <div class="video-item">
		<VideoItemDetail v-for="video in videos" :key="video.etag" :video="video" />
  </div>
</template>

<script>
import VideoItemDetail from '@/components/VideoItemDetail.vue'

export default {
	name: 'VideoItem',
	components: {
		VideoItemDetail,
	},
	props: {
		videos: Array
	}
}
</script>

<style scoped>
	/* div.video-item {
		border: 1px solid black;
		background-color: violet;
	} */
</style>