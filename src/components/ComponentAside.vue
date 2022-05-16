<template lang="pug">
div
  UserOptions.user-options
  SearchInput()
  div(v-if="currentWeather.main")
    template(v-if="currentWeather.icon")
      img(:src="currentWeather.icon" style="width: 100%")
    div
      span.headline {{currentWeather.main.temp.toFixed()}}
        sup o
        span {{celsius ? 'C' : 'F'}}
    .day
      span.title {{$t(`day.${new Date(currentWeather.dt).getDay()}`)}}
    .information
      div(v-if="searchParams.name").information__item
        span.text {{searchParams.name}}
</template>

<script>
import { mapGetters } from 'vuex';
import SearchInput from '@/components/SearchInput.vue';
import UserOptions from '@/components/UserOptions.vue';
import getIconName from '@/utils/getIconName';

export default {
  name: 'ComponentAside',
  components: {
    SearchInput,
    UserOptions,
  },
  computed: {
    ...mapGetters(['weather', 'todayWeather', 'searchParams', 'celsius']),
    currentWeather() {
      if (!this.todayWeather?.main) return {};

      return {
        ...this.todayWeather,
        icon: `/icons/${getIconName(this.todayWeather.weather[0].main || '')}.svg`,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '@/theme/variables.styl'
@import '@/theme/typography.styl'

.day
  margin-top: 24px
  margin-bottom: 24px
  padding: 12px 0
  border-bottom: 1px solid $background

  span:nth-child(1)
    margin-right: 8px

.information
  &__item
    display: flex
    align-items: center
    margin: 8px 0

.user-options
  display: flex
  justify-content: space-between
  margin-bottom: 32px

@media (min-width: $break-desktop)
  .user-options
    display: none
</style>
