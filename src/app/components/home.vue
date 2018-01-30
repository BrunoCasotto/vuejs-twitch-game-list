<template>
  <h1>HELLO WORLD</h1>
</template>
<script>
  import GamesService from '_services/games.js'

  export default {
    name: 'Home',
    mounted() {
      GamesService.getList()
      .then((result) => {
        console.log(result)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
</script>
<style lang="sass" scoped>
</style>