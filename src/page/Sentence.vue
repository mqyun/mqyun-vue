<template>
  <div class="container">
    <ContainerBox></ContainerBox>
  </div>
</template>

<script>
import ContainerBox from '@/components/ContainerBox'

export default {
  name: 'Sentence',
  components: {
    ContainerBox
  }
}
</script>

<style lang="stylus" scoped>
  .container
    width 100%
    height 100%
    background rgba(0, 0, 0, 0.76)
</style>
