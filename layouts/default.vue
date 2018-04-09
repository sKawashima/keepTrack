<template lang='pug'>
div
  Nav
  nuxt
  Footer
</template>

<script>
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'
import localforage from 'localforage'

export default {
  components: {
    Nav,
    Footer
  },
  mounted () {
    const db = localforage.createInstance({
      name: 'TOKT'
    })
    db.getItem('statistics')
      .then((value) => {
        console.log(value)
        if (value) {
          this.$store.commit('set_necessary', value)
        } else {
          db.setItem('statistics', [0, 0])
            .then(() => {
              console.log('set')
            })
            .catch((e) => {})
        }
      })
      .catch((e) => {})
  }
}
</script>

<style>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
</style>
