<template>
  <div class="container-fluid home">
  <section class="row no-gutters input-group mb-3 home__search">
    <input
      type="text"
      class="form-control home__search__input"
      v-model="searchInput"
      placeholder="Buscar"
      aria-label="Search"
    ></input>
    <div class="input-group-append">
      <button
        class="btn fa fa-search home__search__button"
        type="button"
      ></button>
    </div>
  </section>

  <section class="row no-gutters home__filters">
    <div class="home__filters__label">
      <label>Filtrar por:</label>
    </div>

    <div class="home__filters__button">
      <button type="button" class="btn btn-info">Popularidade</button>
    </div>

    <div class="home__filters__button">
      <button type="button" class="btn btn-info">Visualizações</button>
    </div>
  </section>

  <grid :games="games"></grid>

  </div>
</template>
<script>
  import GamesService from '_services/games.js'
  import Normalize from '_helpers/normalize.js'
  import Grid from '_components/grid.vue'

  export default {
    name: 'Home',
    data() {
      return {
        searchInput: '',
        games: []
      }
    },
    mounted() {
      this.fetchGamesList()
    },
    components: {
      Grid
    },
    methods: {
      fetchGamesList() {
        GamesService.getList()
        .then((result) => {
          if(result.data) {
            this.games = Normalize.normalizeGameArray(result.data.top)
          }

        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>
<style lang="sass" scoped>
  @import '~_sass/config';

  .home {
    padding-top: 10px;

    @media screen and(min-width: $screen-md) {
      padding-top: 20px;
      max-width: $screen-md;
      margin: 0 auto;
    }

    &__search {
      height: 40px;
      width: 100%;
      margin-bottom: 10px;
      @media screen and(min-width: $screen-sm) {
        max-width: 600px;
      }

      &__input {
        flex: 1;
        background-color: $tertiary-color;

        &:focus {
          box-shadow: none;
        }
      }

      &__button {
        background-color: $tertiary-color;
        border: 1px solid $quaternary-color;
        border-left: none;

        &:focus {
          box-shadow: none;
        }

        &:before {
          font-size: $font-size-big;
          color: $secondary-color
        }
      }
    }

    &__filters {
      @media screen and(min-width: $screen-mc) {
        max-width: 300px;
      }

      &__button {
        margin-right: 5px;
        height: 40px;
        flex: 1;

        &:last-child {
          margin-right: 0;
        }
      }

      &__label {
        flex: 1;
        line-height: 2.5;
        font-weight: bold;
        font-size: $font-size-default;
        margin-right: 5px;
      }
    }
  }
</style>