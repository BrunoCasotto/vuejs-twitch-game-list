import axios from 'axios'

const API_URL = 'https://api.twitch.tv/kraken/games/top'

const CLIENT_ID = 'vqjdk29ur5y485o84os1897z6bwyuy'

const ACCEPT = 'application/vnd.twitchtv.v5+json'

import {SIZE, SCREEN, LIMIT} from '_helpers/constants'

import Helpers from '_helpers/helpers'


export default new class GamesService {
  
  /**
   * On constructor the view items limit is defined
   */
  constructor() {
    let screenSize = Helpers.getScreenSize()
    this.limit = LIMIT[screenSize]
  }

  /**
   * @return Object of top games list 
   */
  getList () {
    return axios({
      url: `${API_URL}`,
      method: 'get',
      headers: {
        'Client-ID': CLIENT_ID
      },
      params: {
        limit: this.limit
      }
    })
  }

}()
