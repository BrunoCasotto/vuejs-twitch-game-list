import { mount } from 'avoriaz'

import { expect } from 'chai'

import grid from '_components/grid.vue'

import game from '_components/game.vue'

import {GAMES} from './mocks'

describe('grid.vue', () => {
  const component = mount(grid)

  component.setProps({
    games: GAMES
  })

  it('check vue component', () => {
    expect(component.isVueComponent).to.equal(true)
  })

  it('Render essentials visual components', () => {
    expect(component.hasClass('grid')).to.equal(true)
  })

  let games = component.find(game)

  it('Check list of games', () => {
    expect(games.length).to.equal(2)
  })

  it('home verify games instances', () => {
    games.forEach((gameItem) => {
      expect(gameItem.isVueComponent).to.equal(true)
    })
  })
})
