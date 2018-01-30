<template>
  <section class="game">
    <img :src="game.box.medium" alt="">
    {{game.name}}
  </section>
</template>
<script>
  export default {
    name: 'Game',
    props: {
			game: {
				type: Object,
				default: {}
			}
    }
  }
</script>
<style lang="sass" scoped>
  @import '~_sass/config';
</style>