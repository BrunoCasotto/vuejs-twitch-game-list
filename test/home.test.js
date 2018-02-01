import { mount } from 'avoriaz'

import { expect } from 'chai'

import home from '_components/home.vue'

import grid from '_components/grid.vue'

import game from '_components/game.vue'

import {GAMES} from './mocks'

describe('home.vue', () => {
  const component = mount(home)

  it('check vue component', () => {
    expect(component.isVueComponent).to.equal(true)
  })

  it('Render essentials visual components', () => {
    expect(component.hasClass('home')).to.equal(true)
  })

  it('home initial vuex state', () => {
    expect(component.vm.searchInputState).to.equal('')
    expect(component.vm.games.length).to.equal(0)
    expect(component.vm.gamesTemp.length).to.equal(0)
  })

  it('home initial data state', () => {
    expect(component.vm.searchInputState).to.equal('')
    expect(component.vm.offset).to.equal(0)
    expect(component.vm.loader).to.equal(true)
  })

  it('home verify grid instance', () => {
    let gridComponent = component.find(grid)[0]
    expect(gridComponent.isVueComponent).to.equal(true)
  })
})
