<template lang='pug'>
.container
  .field
    label.label 出費金額（円, 計算可）
    input.input(type='text' placeholder='300' v-model='statistic')
    p.calced
      | =
      span  {{evaledStatistic}}
    #submit
      .button.is-success.is-large 必要出費
      .button.is-danger.is-large 不要出費
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
  #submit
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 1rem
    margin-top: 4rem
    .button
      margin-top: 1rem
</style>
