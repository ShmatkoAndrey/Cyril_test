import { shallowMount, createLocalVue } from '@vue/test-utils';
import Feed from './../src/components/Feed';
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Feed', () => {
  const store = new Vuex.Store({
    modules: {
      products: {
        state: {},
        getters: {products() { return null }}
    },
  }})
  const wrapper = shallowMount(Feed, {store, localVue});

  it('should be a .vue file', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
  it('should have #feed div', () => {
    expect(wrapper.contains('div#feed')).toBe(true)
  })
})