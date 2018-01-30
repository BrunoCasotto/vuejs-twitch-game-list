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
      <button class="btn fa fa-search home__search__button" type="button"></button>
    </div>
  </section>

  <section class="row no-gutters home__filters">
    <label class="home__filters__label">Filtrar por:</label>
    <button type="button" class="btn btn-info home__filters__button">Popularidade</button>
    <button type="button" class="btn btn-info home__filters__button">Visualizações</button>
  </section>

  </div>
</template>
<script>
  import GamesService from '_services/games.js'

  export default {
    name: 'Home',
    data() {
      return {
        searchInput: ''
      }
    },
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
  @import '~_sass/config';

  .home {
    padding-top: 10px;

    &__search {
      height: 40px;
      width: 100%;
      margin-bottom: 10px;

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
      &__button {
        margin-right: 5px;
        flex: 1;
        height: 40px;

        &:last-child {
          margin-right: 0;
        }
      }

      &__label {
        width: 25%;
        line-height: 2.5;
        font-weight: bold;
        font-size: $font-size-medium;
        margin-right: 5px;
      }
    }
  }
</style>