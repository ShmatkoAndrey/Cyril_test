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
  width: 220px;
  max-height: 730px;
  overflow: auto;
}
</style>