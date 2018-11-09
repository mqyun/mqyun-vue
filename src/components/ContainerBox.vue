<template>
  <div class="container-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContainerBox'
}
</script>

<style lang="stylus" scoped>
  .container-box
    position fixed
    top 10px
    right 384px
    bottom 10px
    left 10px
    box-shadow 0 0 12px rgb(0, 142, 255)
    border-radius 8px
    background rgba(240, 245, 255, .5)
</style>
