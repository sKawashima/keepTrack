<template lang='pug'>
.container
  #statistics
    h2 出費合計
    p {{ necessary + unnecessary }}円
  #graph
    .bar.necessary(v-bind:style = "{ flexGrow: necessary }")
    .bar.unnecessary(v-bind:style = "{ flexGrow: unnecessary }")
  #expense
    .item
      h3 必要出費
      p {{ necessary }}円
    .item
      h3 不要出費
      p {{ unnecessary }}円
  #input
    nuxt-link(to='input').button.is-large.main 入力
    .button(@click='reset') リセット
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav
  },
  data () {
    return {
      'necessary': 0,
      'unnecessary': 0
    }
  },
  mounted () {
    this.getDB()
  },
  methods: {
    reset: function () {
      if (confirm('本当によろしいですか？')) {
        this.$store.commit('reset')
        this.necessary = this.$store.state.necessary
        this.unnecessary = this.$store.state.unnecessary
      }
    },
    getDB: function () {
      if (this.$store.state.setDB) {
        this.necessary = this.$store.state.necessary
        this.unnecessary = this.$store.state.unnecessary
      } else {
        setInterval(this.getDB, 10)
      }
    }
  }
}
</script>

<style lang='sass' scoped>
$yellow: #d6c726

.container
  min-height: calc(100vh - 4rem - 4rem)
  width: 90vw
  max-width: 768px
  display: flex
  justify-content: flex-start
  align-items: center
  text-align: center
  flex-flow: column
  #statistics
    margin: 2rem 0
    font-weight: bold
    display: flex
    justify-content: center
    align-items: baseline
    h2
      font-size: 1.5rem
    p
      margin-left: 1rem
      font-size: 3rem
  #graph
    display: flex
    width: 100%
    margin: 0 0 1rem
    background-color: #888
    .bar
      height: 2rem
    .necessary
      background-color: hsl(141, 71%, 48%)
    .unnecessary
      background-color: hsl(348, 100%, 61%)
  #expense
    display: flex
    justify-content: space-around
    width: 100%
    .item
      padding: 1rem
    p
      font-size: 1.5em
#input
  display: flex
  flex-flow: column
  width: 100%
  .main
    color: grayscale(darken(#d6c726, 25%))
    background-color: $yellow
    font-weight: bold
    transition: .1s
    &:hover
      border: 0
      background-color: saturate($yellow, 40%)
  .button
    margin-top: 1rem
</style>
