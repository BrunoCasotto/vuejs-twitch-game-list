<template>
  <section class="container-fluid details">
    <div class="row details__nav bg-primary text-white">
      <button @click="backToList" class="btn bg-primary details__nav__back"></button>
      <h3 class="details__nav__title">{{game.name}}</h3>
    </div>
    <div class="row details__content" :style="'background-image: url('+game.image+');' ">
      <div class="col details__content__info text-white">
        <h4 class="text-center">{{game.name}}</h4>
        <h6 class="text-center"><span>{{game.viewers}}</span> visualizações</h6>
        <h6 class="text-center"><span>{{game.channels}}</span> canais ao vivo</h6>
        <h6 class="text-center"><span>{{game.popularity}}</span> popularidade</h6>
      </div>
    </div>
  </section>
</template>
<script>
  import GamesService from '_services/games.js'

  export default {
    name: 'Details',
    computed: {
      game: function () {
       return this.$store.state.Game.data
      }
    },
    methods: {
      backToList() {
        this.$router.push('/')
      }
    }
  }
</script>
<style lang="sass" scoped>
  @import '~_sass/config';
  @import '~_sass/animations';

  .details {

    &__nav {
      height: 60px;

      &__back {
        &:before {
          content: '';
          display: block;
          width: 15px;
          height: 15px;
          border-bottom: solid 2px #fff;
          border-left: solid 2px #fff;
          transform: rotate(45deg);
        }
      }

      &__title {
        font-weight: bold;
        line-height: 2.5;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: calc(100vw - 40px)
      }
    }

    &__content {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height: calc(100vh - 60px);
      position: relative;
      animation: grown .5s ease-out;

      @media screen and(min-width: $screen-sm) {
        //image size
        height: 380px;
        width: 272px;
        margin: 20px auto 0 auto;
      }

      &__info {
        height: 130px;
        width: 100%;
        background-color: $background-color;
        position: absolute;
        bottom: 0;
      }
    }
  }
</style>