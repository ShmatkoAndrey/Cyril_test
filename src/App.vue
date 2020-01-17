<template>
  <div id="app">
    <feed />
  </div>
</template>

<script>
import Feed from "@/components/Feed"
export default {
  name: 'app',
  components: { Feed }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Roboto';
  color: #2c3e50;
}
</style>
