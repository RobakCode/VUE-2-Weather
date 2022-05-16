<template lang="pug">
.card-item
  .card-item__name {{title}}
  .card-item__weather
    img(:src='icon')
  .card-item__temperature
    .hight {{maxTemp || temp}}
      sup o
      sub(v-if="minTemp").lowest {{minTemp}}
        sup o
</template>

<script>
export default {
  name: 'WeatherCard',
  props: {
    title: String,
    icon: String,
    minTemp: String,
    maxTemp: String,
    temp: String,
  },
};
</script>

<style lang="stylus">
@import '@/theme/variables.styl'

.card-item
  display: flex
  flex-direction: column
  align-items: center
  background-color: $background-white
  border-radius: 16px
  padding:  16px
  min-width: 150px

  &__weather
    display: flex
    justify-content: center
    margin-top: 12px
    margin-bottom: 12px
    width: 46%

    img
      width: 100%

  &__temperature
    display: flex

    .lowest
      color: $lead-color
      font-siez: 14px
      margin-left: 6px

@media (min-width: $break-desktop)
  .card-item
    min-width: auto
  box-shadow: 0 0 20px rgba(0,0,0,0.1)
</style>
