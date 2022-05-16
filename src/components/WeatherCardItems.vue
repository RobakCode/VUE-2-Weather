<template lang="pug">
.card-items__wrapper
  div(v-for="item in getItems" v-if="item.icon")
    WeatherCard(
      :day='item.day'
      :icon='item.icon'
      :minTemp='item.minTemp'
      :maxTemp='item.maxTemp'
      :temp='item.temp'
      :hour='item.hour'
    )
</template>

<script>
import WeatherCard from './WeatherCard.vue';

export default {
  name: 'WeatherCardItems',
  props: {
    items: Array,
  },
  components: {
    WeatherCard,
  },
  computed: {
    getItems() {
      return this.items.slice(0, 5);
    },
  },
};
</script>

<style lang="stylus">
@import '@/theme/variables.styl'

.card-items
  &__wrapper
    display: grid
    grid-template-columns: repeat(5, 1fr)
    gap: 16px
    max-width: 100vw
    overflow-x: scroll
    padding-bottom: 16px

@media (min-width: $break-desktop)
  .card-items
    &__wrapper
      overflow-x: auto
      padding-bottom: 0px
      gap: 24px
</style>
