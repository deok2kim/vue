<template>
  <div>
    <h1>핑</h1>
    <input @keyup.enter="sendToPong" v-model="inputText" type="text">
  </div>
</template>

<script>
export default {
  name: 'Ping',
  data: function () {
    return {
      inputText: ''
    }
  },
  methods: {
    sendToPong: function () {
      this.$router.push({ name: 'Pong', query: { message: this.inputText } })
    }
  }
}
</script>

<style>

</style>