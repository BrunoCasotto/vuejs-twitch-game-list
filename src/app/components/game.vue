<template>
  <div class="col-xs-1 col-sm-6 col-md-4 col-lg-3 game">
    <div @click="goDetails" class="game__content">
      <img class="game__content__image" :src="game.image" alt="">
      <div class="game__content__title">
        <h4 class="game__content__title__text"> {{game.name}}</h4>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Game',
    props: {
      game: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      goDetails(game) {
        this.$store.dispatch('updateGame', this.game)
        this.$router.push('/details')
      }
    }
  }
</script>
<style lang="sass" scoped>
  @import '~_sass/config';
  @import '~_sass/animations';

  .game {
    padding: 10px;
    max-width: 33.333%;
    animation: grown .5s ease-out;
    @media screen and(min-width: $screen-md) {
      cursor: pointer;
    }

    @media screen and(min-width: $screen-md) {
      &:hover {
        .game__content__title {
          transform: translateY(0);
        }
      }
    }

    &__content {
      position: relative;
      @media screen and(min-width: $screen-md) {
        overflow: hidden;
      }

      &__image {
        width: 100%;
      }

      &__title {
        background-color: $background-color;
        height: 40px;
        width: 100%;
        bottom: 0;
        position: absolute;
        padding: 0px 5px;
        text-align: center;
        transition: transform ease .5s;

        @media screen and(min-width: $screen-md) {
          transform: translateY(100%);
        }
      }

      &__title__text {
        color: #fff;
        font-weight: bold;
        font-size: $font-size-small;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 3.3;

        @media screen and(min-width: $screen-xs) {
          font-size: $font-size-default;
        }
      }
    }
  }
</style>