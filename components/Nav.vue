<template lang='pug'>
nav
  nuxt-link(to='/').nav-contents.nav-title TOKT
  p.nav-contents.nav-left made by&nbsp;
    a(href='skawashima.com').mylink sKawashima
</template>

<script>
export default {
}
</script>

<style lang='sass' scoped>
$black: grayscale(darken(#d6c726, 25%))
$yellow: #d6c726

nav
  width: 100vw
  height: 4rem
  background-color: $black
  display: flex
  justify-content: space-between
  align-items: center
  .nav-contents
    color: #fff
    padding: 0 2rem
    display: flex
    justify-content: flex-start
    align-items: center
    height: 100%
  .nav-title
    font-weight: bold
    font-size: 1.5em
    background-color: $yellow
    color: $black
    transition: .1s
    align-self: center
    &:hover
      background-color: saturate($yellow, 15%)
  .mylink
    color: $yellow
    &:hover
      color: lighten($yellow, 35%)

</style>
