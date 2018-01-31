import {SIZE, SCREEN} from '_helpers/constants'

export default new class Helpers {

  /**
   * @return {String} - The labe of screen size is showing
   */
  getScreenSize() {
    let screenWidth = window.innerWidth
    let size;

    if(screenWidth < SCREEN.SMALL) {
      size = SIZE.SMALL
    } else if(screenWidth > SCREEN.SMALL && screenWidth < SCREEN.MEDIUM) {
      size = SIZE.MEDIUM
    } else {
      size = SIZE.LARGE
    }

    return size
  }

  /**
   * @return {Array} - Return the array that contains the items found
   * @param {Object} word - The word to search into the array by item name
   * @param {Array} list - List of games to search
   */
  filterName(word, list) {
    try {
     return list.filter((item) => {
      let regex = new RegExp( `\\${word}`, 'g');
      return item.name.match(regex)
     })

    } catch (error) {
      return list
    }
  }
} 