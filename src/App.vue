<template>
  <div id="app">
    <UserInfoBox v-if="hasUserInfoBox" class="info-box-pos" />
    <router-view />
  </div>
</template>

<script>
import UserInfoBox from '@/components/UserInfoBox'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    UserInfoBox
  },
  computed: {
    ...mapState([
      'hasUserInfoBox'
    ])
  }
}
</script>

<style lang="stylus">
*
  margin 0
  padding 0
  border none
  outline none
  box-sizing border-box
#app
  position fixed
  font-family 'Avenir', Helvetica, Arial, sans-serif
  top 0
  right 0
  bottom 0
  left 0
  background url('./assets/images/login_bg.jpg') no-repeat center
  background-size cover
  z-index -9999
  .info-box-pos
    position fixed
    right 10px
    top 10px
  .info-box-pos:before
    content ""
    position absolute
    top -10px
    left 50%
    height 10px
    width 2px
    background rgba(240, 245, 255, .63)
  .info-box-pos:after
    content ""
    position absolute
    right -10px
    top 50%
    height 2px
    width 10px
    background rgba(240, 245, 255, .63)
</style>
