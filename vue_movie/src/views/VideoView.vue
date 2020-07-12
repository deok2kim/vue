<template>
  <div class="video-view">
    <h1>This is an Video page</h1>
    <VideoSearch @search-video="onSearchVideo" />
    <VideoItem />
  </div>
</template>

<script>
import VideoItem from '@/components/VideoItem.vue'
import VideoSearch from '@/components/VideoSearch.vue'

import axios from 'axios'
const API_KEY = 'AIzaSyC83Wuy2LLHAEKinPVSrcx7uivN6ZuLB5A'
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search'

export default {
  name: 'VideoView',
  components: {
    VideoItem,
    VideoSearch,
  },
  data() {
    return {
      videos: [],
    }
  },
  methods: {
    onSearchVideo(inputText) {
      const params = {
        key: API_KEY,
        part: 'snippet',
        type: 'video',
        q: inputText,
      }
      axios.get(YOUTUBE_URL, {params})
        .then((res) => {
          this.videos = res.data.items
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
  div.video-view {
    background-color: ghostwhite;
    border: 1px solid red;
  }
</style>
