import { mount } from 'avoriaz'
import { expect } from 'chai'

import product from '_components/product.vue'

describe('product.vue', () => {
  const component = mount(product)
  component.setProps({
    product: {
      'id': 15,
      'sku': 11033926921508487,
      'title': 'Camisa Nike Corinthians',
      'description': 'Treino 2014',
      'availableSizes': ['S', 'G', 'GG', 'GGG'],
      'style': 'Branco com detalhe em azul',
      'price': 149.9,
      'installments': 5,
      'currencyId': 'BRL',
      'currencyFormat': 'R$',
      'isFreeShipping': true
    }
  })

  it('check vue component', () => {
    expect(component.isVueComponent).to.equal(true)
  })

  it('render essentials visual components', () => {
    expect(component.contains('.product__details')).to.equal(true)
    expect(component.contains('.price__value')).to.equal(true)
    expect(component.contains('.price__currency')).to.equal(true)
    expect(component.contains('.product__details__pay')).to.equal(true)
    expect(component.contains('.pay__conditions')).to.equal(true)
  })

  it('product initial state', () => {
    expect(component.data().selectedSize).to.equal(0)
    expect(component.data().quantity).to.equal(1)
  })

  it('check product functions', () => {
    expect(typeof component.vm.addCart).to.equal('function')
    expect(typeof component.vm.callModal).to.equal('function')
  })
})
