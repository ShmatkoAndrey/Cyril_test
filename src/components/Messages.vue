<template>
  <div class="messages" v-show="open">

    <ul class="messages-list">
      <li class="message" v-for="(msg, index) in messages" :key="'msg' + index">{{msg}}</li>
    </ul>

    <form @submit.prevent="send" class="send-form">
      <input type="text" v-model="message">
      <button type="submit">
        <span class="mdi mdi-send"></span>
      </button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'messages',
  props: ["open", "post"],
  data() {
    return {
      message: ''
    }
  },
  computed: {
    messages() {
      return this.post.messages.slice().reverse();
    }
  },
  methods: {
    send() {
      if(this.message !== '')
        this.$store.dispatch("sendMessage", {id: this.post.id, message: this.message});
      this.message = '';
    }
  }
}
</script>

<style lang="scss">
.messages {
  background-color: white;
  .messages-list {
    list-style: none;
    max-height: 100px;
    overflow: auto;
    padding: 4px 12px;
    .message {
      font-size: 14px;
      margin-bottom: 4px;
    }
  }
}

.send-form {
  display: flex;
  align-items: center;
  position: relative;
  padding: 0px 4px 12px 4px;
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
    padding: 4px;
    padding-right: 20px;
    &:focus {
      outline: none;
      border-bottom-color: green;
      transition: .2s all;
    }
  }
  button {
    cursor: pointer;
    position: absolute;
    right: 0px;
    background-color: transparent;
    border: none;

  }
}
</style>