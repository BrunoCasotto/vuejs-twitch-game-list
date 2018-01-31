
export default new class Normalize {
  /**
   * @param Array - Games Array
   * Normalize the games array
   */
  normalizeGameArray (games = []) {
    try {
      return games.map(item => {
        return {
          name: item.game.name,
          image: item.game.box.large,
          viewers: item.viewers,
          channels: item.channels,
          popularity: item.game.popularity,
          _id: item.game._id
        }
      })
    } catch (error) {
      console.log(error)
      return []
    }
  }
}()
