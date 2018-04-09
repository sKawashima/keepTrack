<template lang='pug'>
.container
  Nav
  h1 Two Option Keep Track
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>

<style lang='sass' scoped>
.container
  min-height: 100vh
  display: flex
  justify-content: flex-start
  align-items: center
  text-align: center
  flex-flow: column

</style>
