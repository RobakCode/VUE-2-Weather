<template lang="pug">
.main-navigation
  div
    .main-navigation__item
      button(
        @click="setLongTermWeather(false)"
        :class="{active: !longTermWeather}"
      ).title__light {{$t('today')}}
    .main-navigation__item
      button(
        @click="setLongTermWeather(true)"
        :class="{active: longTermWeather}"
      ).title__light {{$t('week')}}
  UserOptions.user-options
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import UserOptions from './UserOptions.vue';

export default {
  name: 'MainNavigation',
  components: {
    UserOptions,
  },
  computed: {
    ...mapGetters(['longTermWeather']),
  },
  methods: {
    ...mapActions(['setLongTermWeather']),
  },
};
</script>

<style lang="stylus" scoped>
@import '@/theme/navigation.styl'

.main-navigation .user-options
  display: none

@media (min-width: $break-desktop)
  .main-navigation .user-options
    display: flex
</style>
