<template>
  <div class="post">
    <div class="author">
      <img class="author-avatar" :src="post.author.avatar" />
      <div class="author-name">{{post.author.name}}</div>
    </div>
    <div class="product">
      <img :src="post.image" class="product-image">
      <div class="product-info">
        <div class="product-title">{{post.title}}</div>
        <div class="price">{{post.price}}</div>
        <div class="controls"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ['post']
}
</script>

<style lang="scss">
.post {
  width: 200px;

  .author {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    .author-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      // object-fit: cover;
      margin-right: 12px;
    }
  }
  .product {
    box-shadow: 4px 4px 10px rgba(0,0,0,.15);
    border-radius: 3px;
    overflow: hidden;
    .product-image {
      width: 200px;
      height: 150px;
      object-fit: cover;
      cursor: pointer;
      transition: .2s all;
    }

    &:hover {
      .product-image {
        filter: grayscale(0.5);
      }
    }

    .product-info {
      position: relative;
      padding: 16px 12px;
      display: flex;
      justify-content: space-between;

      .price {
        font-size: 10px;
      }
      .controls {

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