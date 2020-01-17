const store = {
  state: {
    products: [
      { id: 0, title: 'Mountain fox notebook', price: '€12.90', image: 'http://was.su/18-large_default/mountain-fox-notebook.jpg',
        author: { name: 'Gabriel', avatar: 'https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg', link: '' }
      },

      // { title: '', price: '', image: '',
      //   author: { name: '', avatar: '', link: '' }
      // },

    ]
  },
  mutations: { },
  actions: { },
  getters: {
    products(state) {
      return state.products;
    }
  }
}

export default store;