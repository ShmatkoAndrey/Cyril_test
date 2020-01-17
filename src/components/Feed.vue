<template>
  <div id="feed">
    <post v-for="post in products" :key="'post' + post.id" :post="post" />
  </div>
</template>

<script>
import Post from './Post';
export default {
  name: "Feed",
  components: { Post },
  data() {
    return {}
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  }
}
</script>

<style lang="scss">
#feed {
  width: 230px;
  max-height: 730px;
  overflow: auto;
  padding-left: 8px;
  background-color: rgb(240, 240, 240);
}
</style>