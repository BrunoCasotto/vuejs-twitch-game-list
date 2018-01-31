import {SIZE, SCREEN} from '_helpers/constants'

export default new class Helpers {

  /**
   * Return the screen size is showing
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
} 