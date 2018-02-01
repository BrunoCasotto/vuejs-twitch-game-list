import { mount } from 'avoriaz'

import { expect } from 'chai'

import game from '_components/game.vue'

import {GAME} from './mocks'

describe('game.vue', () => {
  const component = mount(game)

  component.setProps({
    game: GAME
  })

  it('check vue component', () => {
    expect(component.isVueComponent).to.equal(true)
  })

  it('Render essentials visual components', () => {
    expect(component.hasClass('game')).to.equal(true)
  })

  it('home initial vuex state', () => {
    expect(typeof component.vm.game).to.equal('object')
    expect(component.vm.game.name).to.equal('League of Legends')
    expect(component.vm.game.image).to.equal('https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-272x380.jpg')
    expect(component.vm.game.channels).to.equal(2890)
    expect(component.vm.game.popularity).to.equal(114561)
    expect(component.vm.game.viewers).to.equal(115387)
  })
})
