<template>
  <div class="post">
    <div class="author">
      <img class="author-avatar" :src="post.author.avatar" />
      <a class="author-name" href="https://www.google.com/" target="_blank">{{post.author.name}}</a>
    </div>
    <div class="product">
      <img :src="post.image" class="product-image">
      <div class="product-info">
        <div class="product-title">{{post.title}}</div>
        <div class="price">{{post.price}}</div>
        <div class="controls">
          <span class="mdi mdi-chat-outline" :title="post.messages.length" @click="toggleMessages" :class="{'active': post.msgOpen}">
            <div class="count" v-show="post.messages.length > 0">{{post.messages.length > 9 ? '9+' : post.messages.length}}</div>
          </span>
          <span class="mdi mdi-heart-outline" @click="like" v-show="post.likes === 0"></span>
          <span class="mdi mdi-heart" @click="like" :class="{'active': post.like}" v-show="post.likes > 0" :title="post.likes">
            <div class="count">{{post.likes > 9 ? '9+' : post.likes}}</div>
          </span>
        </div>
      </div>
    </div>
    <messages :open="post.msgOpen" :post="post" />
  </div>
</template>

<script>
import Messages from './Messages';

export default {
  name: "Post",
  props: ['post'],
  components: { Messages },
  methods: {
    like() {
      this.$store.dispatch("like", {id: this.post.id});
    },
    toggleMessages() {
      this.$store.dispatch("toggleMessages", {id: this.post.id});
    }
  }
}
</script>

<style lang="scss">
.post {
  width: 200px;
  margin-bottom: 10px;

  .author {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    .author-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 12px;
      user-select: none;
    }
    .author-name {
      text-decoration: none;
      color: black;
      font-size: 14px;
    }
  }
  .product {
    box-shadow: 4px 4px 10px rgba(0,0,0,.15);
    border-radius: 3px;
    overflow: hidden;
    background-color: white;
    .product-image {
      width: 200px;
      height: 150px;
      object-fit: cover;
      cursor: pointer;
      transition: .2s all;
      user-select: none;
    }

    &:hover {
      .product-image {
        filter: grayscale(0.5);
      }
    }

    .product-info {
      position: relative;
      padding: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        font-size: 10px;
      }
      .controls {
        display: flex;
        align-items: center;
        span {
          user-select: none;
          &.mdi-heart-outline:hover, &.mdi-heart:not(.active):hover  {
            color: rgba(255, 0, 0, 0.7);
          }
          &.mdi-chat-outline:hover {
            color: rgba(0, 128, 0, 0.5);
          }

          cursor: pointer;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          .count {
            font-size: 8px;
            position: absolute;
          }
          &.mdi-heart .count {
            color: white;
          }
          &.mdi-heart.active {
            color: red;
          }
          &.mdi-chat-outline.active {
            color: green;
          }
        }
      }
    }
    .product-title {
      position: absolute;
      top: -30px;
      color: white;
      // -webkit-text-stroke-width: 0.05px;
      // -webkit-text-stroke-color: black;
    }
  }
}
</style>