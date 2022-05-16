<template lang="pug">
div
  .main-navigation__item
    button(@click="setCelsius" :class="{active: celsius}").icon
      img(src="@/assets/icons/c.svg")
  .main-navigation__item
    button(@click="setFahrenheit" :class="{active: !celsius}").icon
      img(src="@/assets/icons/f.svg")
  .main-navigation__item
    button(
      @click="changeLanguage('pl-PL')"
      :class="{active: language === 'pl-PL'}"
    ).title__light {{$t('polish')}}
  .main-navigation__item
    button(
      @click="changeLanguage('en-US')"
      :class="{active: language === 'en-US'}"
    ).title__light {{$t('english')}}
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'UserOptions',
  computed: {
    ...mapGetters(['celsius', 'language']),
  },
  methods: {
    ...mapActions(['setUnits', 'setLanguage']),
    setCelsius() {
      this.setUnits(true);
    },
    setFahrenheit() {
      this.setUnits(false);
    },
    changeLanguage(language) {
      this.setLanguage(language);
      this.$i18n.locale = language;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '@/theme/navigation.styl'
</style>
