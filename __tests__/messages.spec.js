import { shallowMount, createLocalVue } from '@vue/test-utils';
import Messages from './../src/components/Messages';
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Messages', () => {
  const store = new Vuex.Store({
    modules: {
      products: {
        state: {},
        getters: {},
    },
  }})
  const wrapper = shallowMount(Messages, {store, localVue, propsData: {
    post: { id: 0, title: 'Mountain fox notebook', price: '€12.90', image: 'http://was.su/18-large_default/mountain-fox-notebook.jpg',
    messages: ["test", "test2"], likes: 2, like: false, msgOpen: true,
    author: { name: 'Gabriel', avatar: 'https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg', link: '' }
  }, open: true
  }});

  it('should be a .vue file', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
  it('should have .messages div', () => {
    expect(wrapper.contains('div.messages')).toBe(true)
  })
  it('should have .messages-list ul', () => {
    expect(wrapper.contains('ul.messages-list')).toBe(true)
  })
  it('should show messages', () => {
    expect(wrapper.find('.message').text()).toBe("test2")
  })
})