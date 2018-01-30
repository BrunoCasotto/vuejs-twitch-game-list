import axios from 'axios'

export default new class StoreService {
  getProducts () {
    return axios({
      url: '/products',
      method: 'get',
      data: {}
    })
  }

  getCart () {
    return axios({
      url: '/cart',
      method: 'get',
      data: {}
    })
  }

  insertProduct (product, quantity, variation) {
    return axios({
      url: '/cart/insert',
      method: 'PUT',
      data: {
        product: product,
        quantity: quantity,
        variation: variation
      }
    })
  }

  removeProduct (identifier) {
    return axios({
      url: '/cart/remove/' + identifier,
      method: 'delete',
      data: {}
    })
  }
}()
