<template lang='pug'>
.container
  .field
    label.label 出費金額（円, 計算可）
    input.input(type='text' placeholder='300' v-model='statistic')
    p.calced
      | =
      span  {{evaledStatistic}}
    #push.button.is-primary.is-large 入力
    nuxt-link(to='/').button 戻る
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
  .button
    width: 100%
    margin-top: 2rem
  #push
    margin-top: 4rem
</style>
