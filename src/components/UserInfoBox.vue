<template>
  <div class="info-box">
    <img :src="imgUrl" alt="" class="header-img">
    <div class="user-info">
      <div class="info-item">
        <span class="tip">姓名：</span>孟庆云
      </div>
      <div class="info-item">
        <span class="tip">昵称：</span>冬聆
      </div>
      <div class="info-item">
        <span class="tip">电话：</span>17855831290
      </div>
      <div class="info-item">
        <span class="tip">地址：</span>浙江省杭州市
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfoBox',
  data () {
    return {
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541499768982&di=580de092919121dc0a84a7e6f7189d59&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201609%2F01%2F20160901101353_CVLZY.thumb.700_0.jpeg'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .info-box
    width 360px
    height 520px
    background rgba(240, 245, 255, .63)
    border-radius 8px
    padding 30px 15px
    display flex
    flex-direction column
    align-items center
    box-shadow 0 0 12px rgb(0, 142, 255)
    img.header-img
      width 130px
      height 130px
      border 1px solid rgb(240, 245, 255)
      border-radius 50%
      box-shadow 0 0 12px rgb(240, 245, 255)
    .user-info
      margin-top 25px
      padding 6px
      width 100%
      border 1px solid rgba(240, 245, 255, 0.43)
      border-radius 6px
      .info-item
        float left
        width 50%
        padding 4px
        color #666
        font-size 16px
        span.tip
          font-weight bold
</style>
