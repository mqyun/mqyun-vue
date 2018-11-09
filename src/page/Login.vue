<template>
  <div class="container">
    <div class="login-container">
      <div class="login-box">
        <h1 class="logo">
          MQ<span> yun</span>
        </h1>
        <login-form />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/Login/LoginForm'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
  height 100%
  .login-container
    width 100%
    height 100%
    background rgba(0, 0, 0, .2)
    display flex
    align-items center
    justify-content center
    .login-box:before
      position absolute
      bottom 0
      right 0
      content ""
      width 0
      height 0
      border-bottom 11px solid #354f84
      border-top 11px solid transparent
      border-left 11px solid transparent
    .login-box
      position relative
      width 460px
      height 320px
      padding 20px 60px
      background rgba(240, 245, 255, .63)
      border-radius 7px
      box-shadow 4px 4px 3px rgba(240, 245, 255, .9)
      .logo
        color rgb(255, 255, 255)
        font-size 30px
        text-align center
        span
          color #354f84
      .login-form
        margin-top 20px
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
