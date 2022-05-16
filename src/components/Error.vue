<template lang="pug">
.error__wrapper
  img(src="/icons/rain.svg").error-image
  p.title {{$t('errorMessage')}}
</template>

<script>
export default {
  name: 'ErrorComponent',
};
</script>

<style lang="stylus">
@import '@/theme/variables.styl'
@import '@/theme/typography.styl'

.error
  &__wrapper
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    position: fixed
    content: ""
    left: 0
    top: 0
    width: 100%
    height: 100%
    background-color: $background-white
    box-shadow: 0 0 20px #fff
    z-index: 99999999
    overflow: hidden

    .error-image
      width: 50%

    .title
      text-align: center
      margin-top: 32px
      padding: 0 16px

</style>
