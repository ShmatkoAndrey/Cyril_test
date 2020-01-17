import { shallowMount, createLocalVue } from '@vue/test-utils';
import Post from './../src/components/Post';
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Post', () => {
  const store = new Vuex.Store({
    modules: {
      products: {
        state: {},
        getters: {},
    },
  }})
  const wrapper = shallowMount(Post, {store, localVue, propsData: {
    post: { id: 0, title: 'Mountain fox notebook', price: '€12.90', image: 'http://was.su/18-large_default/mountain-fox-notebook.jpg',
    messages: ["test", "test2"], likes: 2, like: false, msgOpen: true,
    author: { name: 'Gabriel', avatar: 'https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg', link: '' }
  },
  }});

  it('should be a .vue file', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
  it('should have .post div', () => {
    expect(wrapper.contains('div.post')).toBe(true)
  })
  it('should have post props', () => {
    expect(wrapper.props().post).toBeDefined();
    expect(wrapper.props().post.id).toBe(0)
  })
  it('should have likes', () => {
    expect(wrapper.props().post.likes).toBe(2)
    expect(wrapper.find('.mdi-heart .count').text()).toBe("2")
  })
  it('should have price', () => {
    expect(wrapper.props().post.price).toBe("€12.90")
    expect(wrapper.find('.price').text()).toBe("€12.90")
  })
})