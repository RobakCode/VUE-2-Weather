<template lang="pug">
.input-outer
  .input__wrapper
    input(
      type="text"
      ref="input"
      :placeholder="$t('placeholderSearchCity')"
      @input="onChange"
    ).input
  div(v-if="findCityList.length").input-list__wrapper
    div(
      v-for="item in findCityList"
      @click="selectCityFromList(item)"
    ).input-list__item {{item.name}}
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SearchInput',
  computed: {
    ...mapGetters(['findCityList', 'searchParams', 'celsius']),
  },
  methods: {
    ...mapActions(['findCity', 'setSearchParams', 'getWeather']),
    onChange(input) {
      this.findCity(input?.target?.value);
    },
    selectCityFromList(item) {
      this.$refs.input.value = item.name;
      this.setSearchParams(item);
    },
  },
  watch: {
    searchParams(params) {
      this.getWeather(params);
    },
    celsius() {
      if (this.searchParams) { this.getWeather(this.searchParams); }
    },
  },
};
</script>

<style lang="stylus">
@import '@/theme/variables.styl'

.input-outer
  position: relative

.input-list
  &__wrapper
    width: 100%
    border-radius: 8px
    padding: 16px 8px
    background: $background-white
    box-shadow: 0 0 15px rgba(0,0,0,0.1)
    position: absolute
    top: 120%
    left: 0

  &__item
    font-family: $font-primary
    font-size: 14px
    color: $title-color
    padding-bottom: 8px
    margin-bottom: 8px
    border-bottom: 1px solid $background

  &__item:last-of-type
    padding-bottom: 0px
    margin-bottom: 0px
    border-bottom: none

.input
  border: none
  width: 100%
  background: transparent
  outline: none
  height: 48px
  color: $lead-color

  &::placeholder
    color: $lead-color

  &__wrapper
    display: flex
    align-items: center
    position: relative
    padding-left: 48px
    padding-right: 12px
    height: 48px
    border-radius: 10px
    background-color: $background

    &::before
      position: absolute
      content: ""
      left: 12px
      background-image: url('@/assets/icons/search.svg')
      width: 24px
      height: 24px
</style>
