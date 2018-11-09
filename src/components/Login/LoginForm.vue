<template>
  <form class="login-form" autocomplete="off">
    <input type="text" class="login-item" name="account" v-model="account" placeholder="account">
    <input type="password" class="login-item" name="password" v-model="password" placeholder="password">
    <button class="btn-login" type="button" @click="toSentence">登&nbsp;&nbsp;&nbsp;录</button>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    toSentence () {
      setTimeout(() => {
        this.$store.commit({
          type: 'TOGGLE_USERINFOBOX',
          status: true
        })
        this.$router.push('sentence')
      }, 800)
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-form
  display flex
  flex-direction column
  align-items center
  .login-item
    margin-top 20px
    width 100%
    height 47px
    background none
    border-bottom 2px solid #6f5e5e
    text-indent 15px
    font-size 16px
    font-weight bold
    color #f3f3f3
  .login-item:focus
    border-bottom 2px solid #5c7dbf
  button
    margin-top 40px
    width 80%
    height 50px
    background rgba(255, 255, 255, .6)
    border-radius 7px
    box-shadow 0 0 2px rgba(255, 255, 255, .6)
    font-size 18px
    font-weight bold
    color #4c3131
    cursor pointer
</style>
