<template lang='pug'>
nav
  nuxt-link(to='/').nav-contents.nav-title TOKT
  p.nav-contents help
</template>

<script>
export default {
}
</script>

<style lang='sass' scoped>
nav
  width: 100vw
  height: 4rem
  background-color: darken(#d6c726, 25%)
  display: flex
  justify-content: flex-start
  align-items: center
  .nav-contents
    color: #fff
    padding: 0 2rem
    display: flex
    justify-content: flex-start
    align-items: center
    height: 100%
    &:hover
      background-color: darken(#d6c726, 40%)
  .nav-title
    font-weight: bold
    font-size: 1.5em
</style>
