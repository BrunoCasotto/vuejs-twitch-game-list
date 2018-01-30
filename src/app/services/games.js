import axios from 'axios'

const API_URL = 'https://api.twitch.tv/kraken/games/top'

const CLIENT_ID = 'vqjdk29ur5y485o84os1897z6bwyuy'

const ACCEPT = 'application/vnd.twitchtv.v5+json'

export default new class GamesService {

  getList () {
    return axios({
      url: `${API_URL}`,
      method: 'get',
      headers: {
        'Client-ID': CLIENT_ID
      }
    })
  }

}()
