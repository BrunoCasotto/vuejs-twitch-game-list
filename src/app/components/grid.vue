<template>
  <section class="container-fluid grid">
    <div
      v-for="item in games"
      v-bind:todo="item"
      v-bind:key="item.game._id"
    >
      <game :game=item.game></game>
    </div>
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
				default: []
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