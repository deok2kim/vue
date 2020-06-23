<template>
  <div>
    <h1>헬로우 {{ userName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloName',
  data: function() {
    return {
      userName: this.$route.params.name
    }
  }
}
</script>

<style>

</style>