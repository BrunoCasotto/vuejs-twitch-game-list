import { mount } from 'avoriaz'
import { expect } from 'chai'

import cart from '_components/cart.vue'

describe('cart.vue', () => {
  const component = mount(cart)

  it('check vue component', () => {
    expect(component.isVueComponent).to.equal(true)
  })

  it('render essentials visual components', () => {
    expect(component.hasClass('cart-base')).to.equal(true)
    expect(component.contains('.btn--finalize')).to.equal(true)
    expect(component.contains('.total__price')).to.equal(true)
    expect(component.contains('.price__value')).to.equal(true)
  })

  it('cart initial state', () => {
    expect(component.vm.cart.active).to.equal(false)
    expect(component.vm.cart.data.total).to.equal(0)
    expect(component.vm.cart.data.quantity).to.equal(0)
    expect(component.vm.cart.data.products.length).to.equal(0)
  })
})
