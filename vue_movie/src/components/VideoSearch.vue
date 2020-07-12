<template>
  <div class="video-search">
		<h2>Video Search Page</h2>
		<div>
			<label for="inputText"></label>
			<input @keypress.enter="onClikSearch" type="text" id="inputText" v-model="inputText">
		</div>
  </div>
</template>

<script>
export default {
	name: 'VideoSearch',
	data() {
		return {
			inputText: null,
		}
	},
	methods: {
		onClikSearch() {
			console.log('온클릭서치', this.inputText)
			this.$emit('search-video', this.inputText)
		}
	}
}
</script>

<style scoped>
	div.video-search {
		border: 1px solid blue;
		background-color: yellow;
	}
</style>