const store = {
  state: {
    products: [
      { id: 0, title: 'Mountain fox notebook', price: '€12.90', image: 'http://was.su/18-large_default/mountain-fox-notebook.jpg',
        messages: ["test", "test2"], likes: 0, like: false, msgOpen: true,
        author: { name: 'Gabriel', avatar: 'https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg', link: '' }
      },
      { id: 1, title: 'Brown bear cushion', price: '€18.90', image: 'https://depositart.com/12-large_default/brown-bear-cushion.jpg',
        messages: [], likes: 3, like: true, msgOpen: false,
        author: { name: 'Gabriel', avatar: 'https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg', link: '' }
      },
      { id: 2, title: 'Hummingbird cushion', price: '€18.90', image: 'https://images-na.ssl-images-amazon.com/images/I/71g3oZxxS5L._SX355_.jpg',
        messages: [], likes: 10, like: false, msgOpen: false,
        author: { name: 'Elysa', avatar: 'https://p7.hiclipart.com/preview/118/942/565/computer-icons-avatar-child-user-avatar-thumbnail.jpg', link: '' }
      },
      { id: 3, title: 'Dandelion Lamp', price: '€139', image: 'https://thefancy-media-ec.thefancy.com/1280/20170211/1353919928222091287_b35a3e5600a1.jpg',
        messages: [], likes: 1, like: false, msgOpen: false,
        author: { name: 'Gabriel', avatar: 'https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg', link: '' }
      },
    ]
  },
  mutations: {
    LIKE(state, data) {
      state.products = state.products.map(e => {
        if(e.id === data.id) {
          if(e.like === true) {
            e.like = false;
            e.likes -= 1;
          }
          else {
            e.like = true;
            e.likes += 1;
          }
        }
        return e;
      })
    },
    TOGGLE_MESSAGES(state, data) {
      state.products = state.products.map(e => {
        if(e.id === data.id) {
          e.msgOpen = !e.msgOpen;
        }
        return e;
      })
    },

    SEND_MESSAGE(state, data) {
      state.products = state.products.map(e => {
        if(e.id === data.id) {
          e.messages.push(data.message);
        }
        return e;
      })
    },

   },
  actions: {
    like({commit}, data) {
      commit("LIKE", data);
    },
    toggleMessages({commit}, data) {
      commit("TOGGLE_MESSAGES", data);
    },
    sendMessage({commit}, data) {
      commit("SEND_MESSAGE", data);
    },
  },
  getters: {
    products(state) {
      return state.products;
    }
  }
}

export default store;