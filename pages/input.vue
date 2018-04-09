<template lang='pug'>
.container
  .field
    label.label 出費金額（円, 計算可）
    input.input(type='text' placeholder='300' v-model='statistic')
    p.calced
      | =
      span  {{evaledStatistic}}
    #submit
      nuxt-link(to='/')
        .button.is-success.is-large(@click="$store.commit('update_necessary', statistic)") 必要出費
      nuxt-link(to='/')
        .button.is-danger.is-large(@click="$store.commit('update_unnecessary', statistic)") 不要出費
    nuxt-link(to='/').button.button-back 戻る
</template>

<script>
export default {
  data () {
    return {
      statistic: '',
      evaledStatistic: 0
    }
  },
  watch: {
    statistic: function () {
      try {
        this.evaledStatistic = eval(this.statistic)
        if (this.statistic === '') {
          this.evaledStatistic = 0
        }
      } catch (e) {
      }
    }
  }
}
</script>

<style lang='sass' scoped>
.container
  min-height: calc(100vh - 4rem - 4rem)
  width: 90vw
  max-width: 768px
  align-items: flex-start
.field
  width: 100%
  margin-top: 2rem
  .calced
    margin-top: .2rem
    font-size: 1.5rem
    span
      font-weight: bold
  .button-back
    width: 100%
    margin-top: 2rem
  .is-large
    font-size: 1.3rem
  #submit
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 1rem
    margin-top: 4rem
    .button
      width: 100%
</style>
