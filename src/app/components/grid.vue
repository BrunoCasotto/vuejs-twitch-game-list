<template>
  <section class="row grid">
    <game
      v-for="(game, index) in games"
      v-bind:key="index"
      :game="game"
    ></game>
  </section>
</template>

<script>
  import Game from '_components/game.vue'

  export default {
    name: 'Grid',
    data() {
      return {
        item: {}
      }
    },
    props: {
      games: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Game
    }
  }
</script>
<style lang="sass" scoped>
  @import '~_sass/config';
</style>